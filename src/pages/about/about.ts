import { Component } from '@angular/core';

import { PopoverController } from 'ionic-angular';

import { PopoverPage } from '../about-popover/about-popover';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  conferenceDate = '2016-11-26';

  constructor(public popoverCtrl: PopoverController) { }

  presentPopover(event) {
    let popover = this.popoverCtrl.create(PopoverPage);
    popover.present({ ev: event });
  }
}
