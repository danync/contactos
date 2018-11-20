import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the InfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-info',
  templateUrl: 'info.html',
})
export class InfoPage {
  img = '';
  name = '';
  numb = '';
  tweet = '';
  face = '';
  ig = '';
  mail = '';

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  console.log(this.navParams.get('nombre'));
  this.img = this.navParams.get('icon');
  this.name = this.navParams.get('nombre');
  this.numb = this.navParams.get('numero');
  this.tweet = this.navParams.get('twitter');
  this.face = this.navParams.get('fb');
  this.ig = this.navParams.get('insta');
  this.mail = this.navParams.get('correo');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InfoPage');
  }

}
