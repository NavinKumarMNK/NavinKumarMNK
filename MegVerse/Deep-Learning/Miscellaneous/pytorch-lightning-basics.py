# MNIST Dataset
import torch
import torch.nn as nn
import torch.nn.functional as F
import pytorch_lightning as pl
import torchvision
from pytorch_lightning import Trainer
from torch.utils.data import DataLoader, Dataset

class NeuralNet(pl.LightningModule):
    def __init__(self, input_size:int, hidden_size:int, num_classes:int) -> None:
        super(NeuralNet, self).__init__()
        self.input_size = input_size
        self.hidden_size = hidden_size
        self.num_classes = num_classes

        self.fc1 = nn.Linear(self.input_size, self.hidden_size)
        self.relu = nn.ReLU()
        self.fc2 = nn.Linear(self.hidden_size, self.num_classes)
        self.out = nn.Softmax(dim=1)
        self.dataset_split()

    def configure_optimizers(self):
        return torch.optim.Adam(self.parameters(), lr=0.001)

    def training_step(self, batch, batch_idx) -> dict:
        images, labels = batch
        images = images.reshape(-1, 28*28)
        y_pred = self(images)
        loss = F.cross_entropy(y_pred, labels)
        return {"loss" : loss}

    def validation_step(self, batch, batch_idx) -> dict:
        images, labels = batch
        images = images.reshape(-1, 28*28)
        y_pred = self(images)
        loss = F.cross_entropy(y_pred, labels)
        return {"val_loss" : loss}

    def test_step(self, batch, batch_idx) -> dict:
        images, labels = batch
        images = images.reshape(-1, 28*28)
        y_pred = self(images)
        loss = F.cross_entropy(y_pred, labels)
        return {"test_loss" : loss}

    def forward(self, x:torch.Tensor) -> torch.Tensor:
        x.view(-1, 28*28)
        self.y_pred = self.out(self.fc2(self.relu(self.fc1(x))))
        return self.y_pred

    def dataset_split(self):
        self.train_dataset = torchvision.datasets.MNIST(root='./data', train=True,
                                                transform=torchvision.transforms.ToTensor(),
                                                download=True)

        self.val_dataset, self.test_dataset = torch.utils.data.random_split(torchvision.datasets.MNIST
                                                                    (root='./data', train=False,
                                                                    transform=torchvision.transforms.ToTensor()),
                                                                    [5000, 5000])

    def train_dataloader(self) -> DataLoader:
        return torch.utils.data.DataLoader(dataset=self.train_dataset, 
                                            num_workers=6, batch_size=64, shuffle=True)

    def val_dataloader(self) -> DataLoader:
        return torch.utils.data.DataLoader(dataset=self.val_dataset, num_workers=4,
                                            batch_size=64, shuffle=False) 

    def test_dataloader(self) -> DataLoader:
        return torch.utils.data.DataLoader(dataset=self.test_dataset, num_workers=4,
                                            batch_size=64, shuffle=False)

    def validation_epoch_end(self, outputs: torch.Tensor) -> dict:
        avg_loss = torch.stack([x['val_loss'] for x in outputs]).mean()
        return {'val_loss': avg_loss}
        
    

if __name__ == '__main__':
    trainer = Trainer(min_epochs=3, max_epochs=5,
                    fast_dev_run=False,
                    log_every_n_steps=25,
                    accelerator='gpu', devices=1)
    model = NeuralNet(28*28, 500, 10)
    trainer.fit(model)
    trainer.test(model)
