import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreateAnnouncementPage } from './create-announcement';

@NgModule({
  declarations: [
    CreateAnnouncementPage,
  ],
  imports: [
    IonicPageModule.forChild(CreateAnnouncementPage),
  ],
})
export class CreateAnnouncementPageModule {}
