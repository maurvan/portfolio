import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { ProjectsComponent } from './projects/projects.component';
import { SkillsComponent } from './skills/skills.component';
import { WaveComponent } from './wave/wave.component';

const routes: Routes = [

  { path: '', component: WaveComponent },
  { path: '', component: AboutComponent },
  { path: '', component: SkillsComponent },
  { path: '', component: ProjectsComponent },
  { path: '', component: ContactComponent },
  { path: '', component: FooterComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
