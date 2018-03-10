import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  images = ['https://images-na.ssl-images-amazon.com/images/M/MV5BMjIyZGU4YzUtNDkzYi00ZDRhLTljYzctYTMxMDQ4M2E0Y2YxXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX667_CR0,0,667,999_AL_.jpg','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT__E55mjJQgKZDHDtemoh551odk6PVavMkFsK7Hhx7cmyqhNG6','https://pbs.twimg.com/profile_images/801550607618363396/63f090eH_x96.jpg' ];
  images2 = ['https://cdn.cnn.com/cnnnext/dam/assets/160927210830-tk-ah0927-super-169.jpg'];
  images3 = ['https://auto.ndtvimg.com/car-images/medium/mercedes-benz/s-class/mercedes-benz-s-class.webp?v=10'];
  images4 = ['https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'];
  
  
  constructor(public alerCtrl: AlertController) { }

  saveNew( newItem: string ): void {
    console.log(newItem);
    let bigImage = this.alerCtrl.create();

    bigImage.addButton({
      text: 'Back',
      handler: data => {
        console.log('Go Back');
      }
    });

    bigImage.setMessage('<ion-scroll style="width: 100%; height: 100%" scrollX="true" scrollY="true" zoom="true"><img class="big-picture" src="'+newItem+'" /></img></ion-scroll>');
    
    bigImage.present();
  }

  doImageOptions() {
    let alert = this.alerCtrl.create();
    alert.setTitle('Options');

    alert.addButton({
      text: 'Add parent',
      cssClass: 'alert-button',
      handler: data => {
        console.log('Add parent');
      }
    });
    alert.addButton({
      text: 'Share tweet with...',
      cssClass: 'alert-button',
      handler: data => {
        console.log('Share tweet with...');
      }
    });
    alert.addButton({
      text: 'Copy link',
      cssClass: 'alert-button',
      handler: data => {
        console.log('Copy link');
      }
    });
    alert.addButton({
      text: 'I do not like this tweet',
      cssClass: 'alert-button',
      handler: data => {
        console.log('I do not like this tweet');
      }
    });
    alert.addButton({
      text: 'Unfollow @x',
      cssClass: 'alert-button',
      handler: data => {
        console.log('Unfollow @x');
      }
    });
    alert.addButton({
      text: 'Mute @x',
      cssClass: 'alert-button',
      handler: data => {
        console.log('Mute @x');
      }
    });
    alert.addButton({
      text: 'Block @x',
      cssClass: 'alert-button',
      handler: data => {
        console.log('Block @x');
      }
    });
    alert.addButton({
      text: 'Report this Tweet',
      cssClass: 'alert-button',
      handler: data => {
        console.log('Report this Tweet');
      }
    });

    alert.present();
  }


}
