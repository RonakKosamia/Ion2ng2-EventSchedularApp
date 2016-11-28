import { Component } from '@angular/core';

import { ViewController, NavController, App, ModalController } from 'ionic-angular';




@Component({
  template: `
    <ion-list>
     
      <button ion-item (click)="close('https://www.linkedin.com/in/ronak-kosamia/')">LinkedIn</button>
      <button ion-item (click)="close('https://github.com/RonakKosamia')">GitHub Repo</button>
       <button ion-item (click)="close('http://ionicframework.com/docs/v2/getting-started/')">Learn Ionic</button>
    
     
    </ion-list>
  `
})
export class PopoverPage {

  constructor(
    public viewCtrl: ViewController,
    public navCtrl: NavController,
    public app: App,
    public modalCtrl: ModalController
  ) { }

  

  close(url: string) {
    window.open(url);
    this.viewCtrl.dismiss();
  }
}