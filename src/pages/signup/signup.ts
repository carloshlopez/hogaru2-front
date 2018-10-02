import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { HogaruServiceProvider } from '../../providers/hogaru-service/hogaru-service';
import { TabsPage } from '../tabs/tabs';

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  
  email: any;
  password: any;
  password_confirmation: any;
  last_name: any;
  first_name: any;
  loginPage: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public hogaruProvider: HogaruServiceProvider) {
    this.loginPage = LoginPage;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }
  
  registerUser(){
    
    let newUser  = {
      first_name : this.first_name,
      last_name: this.last_name,
      email: this.email,
      password: this.password,
      password_confirmation: this.password_confirmation
    }
    
    let data_to_send = JSON.stringify({
				user: newUser
			})
    
    this.hogaruProvider.registerUser(data_to_send)
    .then(data => {
        console.log("registerUser", data)
        this.hogaruProvider.setCurrentUser(data);
        this.navCtrl.setRoot(TabsPage)
    });
    
  }

}
