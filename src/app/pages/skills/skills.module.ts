import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillsRoutingModule } from './skills-routing.module';
import { SkillsComponent } from './skills.component';
import { RouterLinkWithHref } from '@angular/router';
import { IonicModule } from '@ionic/angular';


@NgModule({
  declarations: [SkillsComponent],
  imports: [
    CommonModule,
    SkillsRoutingModule,
    RouterLinkWithHref,
    IonicModule
  ]
})
export class SkillsModule { }
