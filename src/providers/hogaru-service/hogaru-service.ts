import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AlertController } from 'ionic-angular';
/*
  Generated class for the HogaruServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HogaruServiceProvider {

  //apiUrl = 'https://hogaru-bootcamp-2.herokuapp.com/api/v1/';
  apiUrl = 'https://hogaru-bootcamp-carloshlopez.c9users.io/api/v1/';


  constructor(public http: HttpClient, private alertCtrl: AlertController) {
    console.log('Hello HogaruServiceProvider Provider');
    
  }
  
  
  getAnnouncements() {
    let user_id = window.localStorage['user_id']
    return new Promise(resolve => {
      this.http.get(this.apiUrl+'announcements?user_id=' + user_id).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }
  
  markAnnouncementSeen(announcement_id) {
    let user_id = window.localStorage['user_id']
    return new Promise(resolve => {
      this.http.get(this.apiUrl+'announcements/' + announcement_id + '/mark_as_seen?user_id=' + user_id).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }
  
  createAnnouncement(announcement){
    return new Promise(resolve => {
      this.http.post(this.apiUrl+'announcements/', announcement).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
        let msg_errors = ""
        //console.log("err[error]", err["error"])
        for (let msg in err["error"]) {
            msg_errors = msg_errors + " " + msg + ": " + err["error"][msg]
            //console.log("msg", msg)
            //console.log("msg[msg]", err["error"][msg])
        }

        let alert = this.alertCtrl.create({
          title: 'Error creating announcement',
          subTitle: msg_errors,
          buttons: ['Dismiss']
        });
        alert.present();
      });
    });
  }
  
  
  
  logIn(data_to_send){
    return new Promise(resolve => {
      this.http.post(this.apiUrl+'users/sign_in', data_to_send).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }
  
  setCurrentUser(user_data){
    console.log("User data recieved", user_data);
    window.localStorage['user_id'] = user_data["id"];
    window.localStorage['user_name'] = user_data["last_name"] + ", " +user_data["first_name"];

  }
  
  

}
