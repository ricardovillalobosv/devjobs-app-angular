import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { JobComponent } from './job/job.component';



@NgModule({
  declarations: [
    HomeComponent,
    JobComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
