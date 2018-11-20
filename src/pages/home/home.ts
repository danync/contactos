import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { InfoPage } from '../info/info';
import { NuevoconPage } from '../nuevocon/nuevocon';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

informacion = InfoPage;
newcont = NuevoconPage;
contact = '';
contactos = [
{id:0,
  nombre: "Jaebum Im",
  numero: "(33) 14 62 78 36",
  correo: "imjaebum@gmail.com",
  twitter: "@jaebrum",
  insta: "hades_",
  fb: "imjb_",
  icon: "../assets/jb.jpg"
}, 
{id:1,
  nombre: "Jiwoo Kim",
  numero: "(33) 26 21 94 67",
  correo: "chuu0022@gmail.com",
  twitter: "@edenxheart",
  insta: "tobechuu",
  fb: "chuucita",
  icon:  "../assets/jiwoo.png"
}, 
{id:2,
  nombre: "Jungkook Jeon",
  numero: "(58) 41 24 51 52 60",
  correo: "jeoncr@gmail.com",
  twitter: "@Junshook1",
  insta: "jeonjungk",
  fb: "josh.jung",
  icon:  "../assets/jungkook.jpg"
}, 
];
nota = '';

  constructor(public navCtrl: NavController, 
              public alertCtrl: AlertController) {
  }

  Info(id: number){
    this.navCtrl.push(this.informacion, this.contactos[id]);
    console.log(id);
  }

  NuevoContacto(){
    this.navCtrl.push(this.newcont, {contactos: this.contactos});
  }

  Agregar(){
    this.navCtrl.push(this.newcont, {contactos: this.contactos});
  }

}
