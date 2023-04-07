import torch
import torch.nn as nn
import torch.nn.functional as F
import numpy as np
import cv2
from pprint import PrettyPrinter
from collections import Counter

class Utils():
    def __init__(self, num_classes:int=None) -> None:
        self.num_classes = num_classes

    #bounding box iou
    def bounding_box_iou(self, box1:list, box2:list) -> float | np.ndarray:
        b1_x1, b1_y1, b1_x2, b1_y2 = box1[:,0], box1[:,1], box1[:,2], box1[:,3]
        b2_x1, b2_y1, b2_x2, b2_y2 = box2[:,0], box2[:,1], box2[:,2], box2[:,3]
        inter_rect_x1 =  torch.max(b1_x1, b2_x1)
        inter_rect_y1 =  torch.max(b1_y1, b2_y1)
        inter_rect_x2 =  torch.min(b1_x2, b2_x2)
        inter_rect_y2 =  torch.min(b1_y2, b2_y2)
        inter_area = torch.clamp(inter_rect_x2 - inter_rect_x1 + 1, min=0) * torch.clamp(inter_rect_y2 - inter_rect_y1 + 1, min=0)
        b1_area = (b1_x2 - b1_x1 + 1) * (b1_y2 - b1_y1 + 1)
        b2_area = (b2_x2 - b2_x1 + 1) * (b2_y2 - b2_y1 + 1)
        iou = inter_area / (b1_area + b2_area - inter_area + 1e-16)
        return iou

    def non_max_suupression():
        pass

    def mAP(self, pred_boxex, true_boxes, 
            iou_threshold:int=0.5, box_formats:str="corners") -> float:
        #boxes = [[train indx, class_pred, prob_score, x1, y1, x2, y2], ...]


    def transform():
        pass
