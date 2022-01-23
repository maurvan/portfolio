import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  { path: 'wave', loadChildren: () => import('./wave/wave.component').then(m => m.WaveComponent) },
  { path: 'about', loadChildren: () => import('./about/about.component').then(m => m.AboutComponent) },
  { path: 'skills', loadChildren: () => import('./skills/skills.component').then(m => m.SkillsComponent) },
  { path: 'projects', loadChildren: () => import('./projects/projects.component').then(m => m.ProjectsComponent) },
  { path: 'contact', loadChildren: () => import('./contact/contact.component').then(m => m.ContactComponent) },
  { path: 'footer', loadChildren: () => import('./footer/footer.component').then(m => m.FooterComponent) },
  { path: '', redirectTo: '', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
