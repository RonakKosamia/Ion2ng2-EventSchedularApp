import { Component } from '@angular/core';

import { MenuController, NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { TabsPage } from '../tabs/tabs';


export interface Slide {
  title: string;
  description: string;
  image: string;
}

@Component({
  selector: 'page-tutorial',
  templateUrl: 'tutorial.html'
})
export class TutorialPage {
  slides: Slide[];
  showSkip = true;

  constructor(public navCtrl: NavController, public menu: MenuController, public storage: Storage) {
    this.slides = [
      {
        title: 'Welcome to <b>Angular 2 Ionic 2 App</b>',
        description: 'This <b>Angular Typescript App</b> is a practical preview of the Ionic Framework in action, and a demonstration of proper code use.',
        image: 'assets/img/ica-slidebox-img-1.png',
      }
    ];
  }

  startApp() {
    this.navCtrl.push(TabsPage);
    this.storage.set('hasSeenTutorial', 'true');
  }

  onSlideChangeStart(slider) {
    this.showSkip = !slider.isEnd;
  }

  ionViewDidEnter() {
    // the root left menu should be disabled on the tutorial page
    this.menu.enable(false);
  }

  ionViewWillLeave() {
    // enable the root left menu when leaving the tutorial page
    this.menu.enable(true);
  }

}
