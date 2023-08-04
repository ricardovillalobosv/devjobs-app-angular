import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { JobComponent } from './job/job.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'job/:id',
    component: JobComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
