import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HogaruServiceProvider } from '../../providers/hogaru-service/hogaru-service';
import { CreateAnnouncementPage } from '../create-announcement/create-announcement';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  createAnnouncementPage: any;
  announcements: any;

  constructor(public navCtrl: NavController, public hogaruProvider: HogaruServiceProvider) {
    this.createAnnouncementPage = CreateAnnouncementPage;
  }
  
  getAnnouncements() {
    this.hogaruProvider.getAnnouncements()
    .then(data => {
      this.announcements = data
      console.log("Calling announcements", data);
    });
  }
  
  markSeen(announcement_id) {
    console.log("announcement_id", announcement_id);
    this.hogaruProvider.markAnnouncementSeen(announcement_id)
    .then(data => {
      console.log("makr as seen", data);
      this.getAnnouncements();
    });
  }
  
  
  ionViewWillEnter(){
    this.getAnnouncements();
  }

}
