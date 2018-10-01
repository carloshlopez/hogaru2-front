import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HogaruServiceProvider } from '../../providers/hogaru-service/hogaru-service';
import { AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';

/**
 * Generated class for the CreateAnnouncementPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-create-announcement',
  templateUrl: 'create-announcement.html',
})
export class CreateAnnouncementPage {

  text: any;
  expiration_date: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, 
  public hogaruProvider: HogaruServiceProvider, private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateAnnouncementPage');
  }
  
  createAnnouncement(){
    var send_data = {
   	"announcement": {
   		"text": this.text,
   		"expiration_date": this.expiration_date,
   		"user_id": window.localStorage['user_id']
   		
   	  }
    }
    console.log("announcement to create", send_data)
    this.hogaruProvider.createAnnouncement(send_data)
    .then(data => {
        console.log("Is message error", data["error"])
        console.log("Is message ok", data["msg"])
        
        let alert = this.alertCtrl.create({
          title: 'Info',
          subTitle: data["msg"],
          buttons: [{
            text: 'Ok',
            handler: () => {
              // user has clicked the alert button
              // begin the alert's dismiss transition
              let navTransition = alert.dismiss();
        
                navTransition.then(() => {
                  this.navCtrl.push(HomePage);
                });
              return false;
            }
          }]
        });
        alert.present();
      console.log("Calling create announcement", data);
    });
  }

}
