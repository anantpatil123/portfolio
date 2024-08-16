import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from './projects.component';
import { RouterLinkWithHref } from '@angular/router';
import { IonicModule } from '@ionic/angular';


@NgModule({
  declarations: [ProjectsComponent],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    RouterLinkWithHref,
    IonicModule
  ]
})
export class ProjectsModule { }
