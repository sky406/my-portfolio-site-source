import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DesignsComponent } from './designs/designs.component';
import { HomeComponent } from './home/home.component';
import { ProjectComponent } from './project/project.component';
import { ProjectsComponent } from './projects/projects.component';
import { WindowComponent } from './window/window.component';

const routes: Routes = [
  // {path:'home/:window',component:HomeComponent}
  {path:"projects/:type",component:ProjectsComponent},
  {path:"project",component:ProjectComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
