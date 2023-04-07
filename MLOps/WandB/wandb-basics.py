import torch
from torch.nn import functional as F
from torch import nn
from torchvision.datasets import MNIST
from torchvision import transforms
from torch.utils.data import DataLoader
import pytorch_lightning as pl
from pytorch_lightning import Trainer
from pytorch_lightning.loggers import WandbLogger
import wandb
import torchvision
import uuid
import numpy as np
import torchmetrics

class NeuralNet(pl.LightningModule):
    def __init__(self, in_dims:int, n_layer_1:int, n_classes:int, lr=1e-3) -> None:
        super(NeuralNet, self).__init__()
        self.in_dims = in_dims
        self.n_layer_1 = n_layer_1
        self.n_classes = n_classes

        self.fc1 = nn.Linear(np.prod(self.in_dims), self.n_layer_1)
        self.relu = nn.ReLU()
        self.fc2 = nn.Linear(self.n_layer_1, self.n_classes)
        self.out = nn.Softmax(dim=1)
        
        self.save_hyperparameters()
        self.accuracy = torchmetrics.Accuracy()

    def forward(self, x:torch.Tensor) -> torch.Tensor:
        self.logits = self.out(self.fc2(self.relu(self.fc1(x.view(-1, 28*28)))))
        return self.logits

def configure_optimizers(self):
        return torch.optim.Adam(self.parameters(), lr=0.001)

def training_step(self, batch, batch_idx) -> dict:
    images, labels = batch
    images = images.reshape(-1, 28*28)
    logits = self(images)
    loss = F.cross_entropy(logits, labels)
    self.log('train/loss', loss, on_epoch=True)
    self.accuracy(logits, labels)
    self.log('train/acc', self.accuracy, on_epoch=True)
    return {"loss" : loss}

def validation_step(self, batch, batch_idx) -> dict:
    images, labels = batch
    images = images.reshape(-1, 28*28)
    logits = self(images)
    loss = F.cross_entropy(logits, labels)
    self.accuracy(logits, labels)
    self.log("valid/loss_epoch", loss)  
    self.log('valid/acc_epoch', self.accuracy)
    return logits

def test_step(self, batch, batch_idx) -> dict:
    images, labels = batch
    images = images.reshape(-1, 28*28)
    logits = self(images)
    loss = F.cross_entropy(logits, labels)
    self.accuracy(logits, labels)
    self.log("test/loss_epoch", loss, on_step=False, on_epoch=True)
    self.log("test/acc_epoch", self.accuracy, on_step=False, on_epoch=True)
    return {"test_loss" : loss}

def save_model(self):
    dummy_input = torch.zeros(self.hparams["in_dims"], device=self.device)
    model_filename = "model" + str(uuid.uuid4().hex)
    torch.onnx.export(self, dummy_input, model_filename + '.onnx', export_params=True) # open exchange support
    torch.save(self.state_dict(), model_filename + '.pt') # local save
    artifact = wandb.Artifact(name=model_filename + '.cpkt', type="model") # wandb save
    artifact.add_file(model_filename+'.onnx')
    wandb.log_artifact(artifact)
    return model_filename

def test_epoch_end(self, test_step_outputs): 
    self.save_model()

def validation_epoch_end(self, validation_step_outputs):
    self.save_model()
    flattened_logits = torch.flatten(torch.cat(validation_step_outputs))
    self.logger.experiment.log(
        {"valid/logits": wandb.Histogram(flattened_logits.to("cpu")),
         "global_step": self.global_step})
    

NeuralNet.configure_optimizers = configure_optimizers
NeuralNet.training_step = training_step
NeuralNet.validation_step = validation_step
NeuralNet.test_step = test_step
NeuralNet.test_epoch_end = test_epoch_end
NeuralNet.validation_epoch_end = validation_epoch_end
NeuralNet.save_model = save_model

class MNISTDataModule(pl.LightningDataModule):
    def __init__(self, data_dir='./data', batch_size:int=64) -> None:
        super(MNISTDataModule, self).__init__()
        self.batch_size = batch_size
        self.data_dir = data_dir
        self.transfrom = transforms.Compose([transforms.ToTensor(), transforms.Normalize((0.1307,), (0.3081,))])
        
    def prepare_data(self) -> None:
        MNIST(self.data_dir, train=True, download=True)
        MNIST(self.data_dir, train=False, download=True)


    def setup(self, stage=None):
        if(stage is None or stage == 'fit'):
            self.train_dataset = MNIST(self.data_dir, train=True,
                                                transform=torchvision.transforms.ToTensor(),
                                                )
            self.train_dataset, self.val_dataset = torch.utils.data.random_split(self.train_dataset, [50000, 10000])
        if stage is None or stage == 'test':
            self.test_dataset = MNIST(self.data_dir, train=False,
                                                transform=torchvision.transforms.ToTensor(),
                                                download=True)

    def train_dataloader(self) -> DataLoader:
        return torch.utils.data.DataLoader(dataset=self.train_dataset, 
                                            num_workers=6, batch_size=64, shuffle=True)

    def val_dataloader(self) -> DataLoader:
        return torch.utils.data.DataLoader(dataset=self.val_dataset, num_workers=4,
                                            batch_size=64, shuffle=False) 

    def test_dataloader(self) -> DataLoader:
        return torch.utils.data.DataLoader(dataset=self.test_dataset, num_workers=4,
                                            batch_size=64, shuffle=False)
    
class Logger(pl.Callback):
    def __init__(self, val_samples, num_samples=32):
        super().__init__()
        self.val_imgs, self.val_labels = val_samples
        self.val_imgs = self.val_imgs[:num_samples]
        self.val_labels = self.val_labels[:num_samples]
          
    def on_validation_epoch_end(self, trainer, pl_module):
        val_imgs = self.val_imgs.to(device=pl_module.device)

        logits = pl_module(val_imgs)
        preds = torch.argmax(logits, 1)

        trainer.logger.experiment.log({
            "examples": [wandb.Image(x, caption=f"Pred: {y}, Label: {z}") 
                        for x, y, z in zip(val_imgs, preds, self.val_labels)],
            "global_step": trainer.global_step
        })

'''
class WandbLogger(pl.loggers.WandbLogger):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self._wandb_run = wandb.init(project="wandb", entity="mnk")

    def log_hyperparams(self, params):
        self._wandb_run.config.update(params)

    def log_metrics(self, metrics):
        self._wandb_run.log(metrics)

    def finalize(self, status):
        self._wandb_run.finish()

class Trainer(pl.Trainer):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.logger = WandbLogger(project="wandb", entity="mnk")
'''

if __name__ == '__main__':
    data = MNISTDataModule()
    data.prepare_data()
    data.setup()
    wandb.init()
    logger = pl.loggers.WandbLogger(project="wandb", entity="mnk")
    samples = next(iter(data.val_dataloader()))
    trainer = Trainer(min_epochs=1, max_epochs=3,
                    fast_dev_run=False,
                    logger=logger,
                    log_every_n_steps=50,
                    accelerator='gpu', devices=1,
                    deterministic=True,
                    callbacks=[Logger(samples)])
    model = NeuralNet((1, 28, 28), 256, 10)
    trainer.fit(model, data)
    trainer.test(datamodule=data, ckpt_path=None)
    wandb.finish()