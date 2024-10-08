import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EducationRoutingModule } from './education-routing.module';
import { EducationComponent } from './education.component';
import { RouterLinkWithHref } from '@angular/router';
import { IonicModule } from '@ionic/angular';


@NgModule({
  declarations: [EducationComponent],
  imports: [
    CommonModule,
    EducationRoutingModule,
    RouterLinkWithHref,
    IonicModule
  ]
})
export class EducationModule { }
