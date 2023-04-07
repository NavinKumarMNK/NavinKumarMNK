#training on VOC Dataset
#change paramters inorder to train on custom dataset
import torch
import torch.nn as nn
import torch.nn.functional as F
from torch.utils.data import DataLoader, Dataset
import numpy as np
import cv2
import pandas as pd
from pprint import PrettyPrinter
from utils import Utils
from PIL import Image, ImageFile
import os

ImageFile.LOAD_TRUNCATED_IMAGES = True

class Dataset(Dataset):
    def __init__(self, csv_file:str, img_dir:str, label_dir:str, 
                image_size:int, anchors:list, classes:int, size=[13, 26, 52],
                transform=None) -> None:
        #General Structure: annoations [train.csv, test.csv] , image, label
        super(Dataset, self).__init__()
        self.annotations = pd.read_csv(csv_file)
        self.img_dir = img_dir
        self.label_dir = label_dir
        self.transforms = transform
        self.image_size = image_size
        self.ignore_iou_tresh = 0.5
        self.anchors = torch.tensor(anchors[0] + anchors[1] + anchors[2])
        self.num_anchors = self.anchors.shape[0]
        self.classes = classes
        self.size = size

    def __len__(self) -> int:
        return len(self.annotations)

    def __getitem__(self, index:int) -> list:
        label_path = os.path.join(self.label_dir, self.annotations.iloc[index, 1])
        img_path = os.path.join(self.img_dir + self.annotations.iloc[index, 0])




    