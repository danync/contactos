import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the NuevoconPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-nuevocon',
  templateUrl: 'nuevocon.html',
})
export class NuevoconPage {

  contactos = [];
  nome = '';
  num = '';
  email = '';
  twitt = '';
  faceb = '';
  instag = '';

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
    this.contactos = this.navParams.get("contactos");
  }



  Agregar(){
    if(this.nome.length > 0){
      this.contactos.push(
        {id: 3,
        nombre: this.nome,
        numero: this.num,
        correo: this.email,
        twitter: this.twitt,
        insta: this.faceb,
        fb: this.faceb,
        icon: "../assets/jinyoung.jpg"});
        this.navCtrl.pop();
      }
      else{
        const alert = this.alertCtrl.create({
          title: '¡Ups!',
          subTitle: 'El nombre y el número de tu contacto son requeridos.',
          buttons: ['OK']
        });
        alert.present();
      }
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NuevoconPage');
  }
}
