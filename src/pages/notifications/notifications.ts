import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-notifications',
  templateUrl: 'notifications.html'
})
export class Notifications {
  constructor(public alerCtrl: AlertController) { }

  doNotificationsOptions() {
    let alert = this.alerCtrl.create();
    alert.setTitle('Options');

    alert.addButton({
      text: 'See Less',
      cssClass: 'alert-button',
      handler: data => {
        console.log('See Less');
      }
    });
    alert.addButton({
      text: 'Cancel',
      cssClass: 'alert-button',
      handler: data => {
        console.log('Cancel');
      }
    });
    alert.present();
  }


}
