import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SignupPage } from '../signup/signup';
import { HogaruServiceProvider } from '../../providers/hogaru-service/hogaru-service';
import { AlertController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  email: any;
  password: any;
  signupPage: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public hogaruProvider: HogaruServiceProvider, private alertCtrl: AlertController) {
    this.signupPage = SignupPage;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

 doLogin(){
    var send_data = {
   	"user": {
   		"email": this.email,
   		"password": this.password
   	  }
    }
    console.log("user to login", send_data)
    this.hogaruProvider.logIn(send_data)
    .then(data => {
        console.log("resp login", data)
        this.hogaruProvider.setCurrentUser(data);
        this.navCtrl.setRoot(TabsPage)
    });
  }


  ionViewWillEnter(){
    console.log("In login is there user:", window.localStorage['user_id'])
    if (window.localStorage['user_id'] != undefined){
      this.navCtrl.setRoot(TabsPage)
    }
  }


}
