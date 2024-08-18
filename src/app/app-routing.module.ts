import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },

  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./pages/contact/contact.module').then(m => m.ContactModule)
  }, {
    path: 'skills',
    loadChildren: () => import('./pages/skills/skills.module').then(m => m.SkillsModule)
  }, {
    path: 'education',
    loadChildren: () => import('./pages/education/education.module').then(m => m.EducationModule)
  }, {
    path: 'experience',
    loadChildren: () => import('./pages/projects/projects.module').then(m => m.ProjectsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
