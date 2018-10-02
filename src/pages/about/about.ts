import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  
  user_name: any;

  constructor(public navCtrl: NavController) {
    this.user_name = window.localStorage['user_name']
  }
  
  logout(){
    window.localStorage['user_id'] = "-1";
    this.navCtrl.setRoot(LoginPage);
  }

}
