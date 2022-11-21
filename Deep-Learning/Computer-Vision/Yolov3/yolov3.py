import torch
import torch.nn as nn
import torch.nn.functional as F
import numpy as np
import cv2
from pprint import PrettyPrinter

class Utilities():
    pass

class OperationLayer(nn.Module):
    def __init__(self, operation:str):
        super(OperationLayer, self).__init__()

class Detector(nn.Module):
    def __init__(self, anchors):
        super(Detector, self).__init__()
        self.anchors = anchors

class Yolov3(nn.Module):
    def __init__(self, config_file) -> None:
        super(Yolov3, self).__init__()
        self.read_config(file_name=config_file)  
        self.create_modules()
        self.device = self.assign_device()
        self.header = torch.IntTensor([0,0,0,0])
        self.seen = 0

    def assign_device():
        device = torch.device("cuda" if torch.cuda.is_available() else "cpu")
        return device

    def read_config(self, file_name:str) -> None:
        config_file = open(file_name, "r")
        config = config_file.read().split("\n")
        config = [line for line in config if len(line) > 0 and line[0]!="#"]
        config = [line.strip() for line in config ]
        
        #Blocks 
        self.network_blocks = [] # layers
        network_block = {}  # sub-layers 

        #every_line
        for x in config :  
            if x[0] == '[':
                if(len(network_block) != 0):
                    self.network_blocks.append(network_block)
                    network_block = {}
                network_block["type"] = x[1:-1].strip()
            else:
                key, value = x.split("=")
                network_block[key.strip()] = value.strip()
        self.network_blocks.append(network_block)

    def create_modules(self) -> None:
        self.yolo_info = self.network_blocks[0]
        self.module = nn.ModuleList([])
        channels = int(self.yolo_info["channels"])
        filterTracker = []

        for index, block in enumerate(self.network_blocks[1:]):
            #Main Layer
            seqModule = nn.Sequential()
            if(block["type"] == "convolutional"):
                filters = int(block["filters"])
                kernel_size = int(block["size"])
                stride = int(block["stride"])
                padding = (kernel_size - 1) // 2 if block["pad"] == "1" else 0
                activation = block["activation"]
                try: batch_norm = int(block["batch_normalize"]); bias = False
                except: batch_norm = 0 ; bias = True

                #2D convolutional layer
                conv = nn.Conv2d(channels, filters, kernel_size, stride, padding, bias=bias)
                seqModule.add_module(f"conv_{index}", conv)
                if batch_norm:
                    # Batch normalization layer
                    bn = nn.BatchNorm2d(filters)
                    seqModule.add_module(f"batch_norm_{index}", bn)
                if activation == "leaky":
                    # Leaky ReLU activation
                    activn = nn.LeakyReLU(0.1, inplace=True)
                    seqModule.add_module(f"leaky_{index}", activn)
                
            elif(block["type"] == "upsample"):
                stride = int(block["stride"])
                # Upsampling layer
                upsample = nn.Upsample(scale_factor=2, mode="bilinear")
                seqModule.add_module(f"upsample_{index}", upsample)
            
            elif(block["type"] == "route"):
                block['layers'] = block['layers'].split(',')
                try: start = int(block['layers'][0])
                except: start = 0
                try: end = int(block['layers'][1])
                except: end = 0

                if start > 0: start = start - index
                if end > 0: end = end - index

                # Route layer - Concatenation
                route = OperationLayer("route")
                seqModule.add_module(f"route_{index}", route)
                if end < 0: filters = filterTracker[index + start] + filterTracker[index + end]
                else: filters = filterTracker[index + start]

            elif(block["type"] == "shortcut"):
                # Shortcut layer - ResNet Type
                shortcut = OperationLayer("shortcut")
                seqModule.add_module(f"shortcut_{index}", shortcut)
        
            elif(block["type"] == "yolo"):
                #anchors and masks
                mask = [int(mask.strip()) for mask in block['mask'].split(',')]
                anchors = [int(anchors.strip()) for anchors in block['anchors'].split(',')]
                anchors = [(anchors[j], anchors[j+1]) for j in range(0, len(anchors), 2)]
                anchors = [anchors[j] for j in mask]
                detector = Detector(anchors)
                seqModule.add_module(f"detector_{index}", detector)

            self.module.append(seqModule)
            filterTracker.append(filters)
            channels = filters

    def load_weights(self, file_path:str) -> None:
        #{Major VN, Minor VN, Sub VN, images seen}
        with open(file_path, "rb") as file:
            header = np.fromfile(file, dtype=np.int32, count=5)
            self.header = torch.from_numpy(header)
            self.seen = self.header[3]
            self.weights = np.fromfile(file, dtype=np.float32)

        tracker = 0


    def save_weights(self, path:str, cutoff:int = 0) -> None:
        pass

    def forward(self, x:torch.Tensor, targets=None) -> torch.Tensor:
        self.detections = []
        module = self.network_blocks[1:]
        layerOutupts = {}

        for index, block in enumerate(module):
            if (block["type"] == "convolutional" or block["type"] == "upsample"): 
                #upsampling and convolution direct forward
                layerOutupts[index] = self.module[index](x)
        
            elif (block["type"] == "route"):
                #route layer - concatenation
                block['layers'] = [int(x) for x in block['layers'].split(',')]
                try: start = int(block['layers'][0])
                except: start = 0
                try: end = int(block['layers'][1])
                except: end = 0

                if start > 0: start = start - index
                if end > 0: end = end - index

                if end < 0: layerOutupts[index] = torch.cat((layerOutupts[index + start], layerOutupts[index + end]), 1)
                else: layerOutupts[index] = layerOutupts[index + start] # only start

            elif (block["type"] == "shortcut"):
                # shortcut layer - ResNet Type
                from_ = int(block["from"])
                layerOutupts[index] = layerOutupts[index-1] + layerOutupts[index+from_]

            '''
            elif (block["type"] == "yolo"):
                #yolo layer - Detection
                anchors = self.module[index][0].anchors
                inp_dim = int(self.yolo_info["height"])
                num_classes = int(block["classes"])

                #transform
                x = x.data
                #x = predict_transform(x, inp_dim, anchors, num_classes, CUDA)
                if type(x) == int:
                    continue
                self.detections.append(x)

            x = layerOutupts[index]
            '''    
        

if __name__ == "__main__":
    config_file = "./yolov3.cfg"
    model = Yolov3(config=config_file)
    pprint = PrettyPrinter(indent=4).pprint
    #pprint(model.network_blocks)
    pprint(vars)
    pprint(model.modules)