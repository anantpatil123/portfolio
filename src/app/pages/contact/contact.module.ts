import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './contact.component';
import { RouterLinkWithHref } from '@angular/router';
import { IonicModule } from '@ionic/angular';


@NgModule({
  declarations: [ContactComponent],
  imports: [
    CommonModule,
    ContactRoutingModule,
    RouterLinkWithHref ,
    IonicModule
  ]
})
export class ContactModule { }
