import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { JobComponent } from './job/job.component';
import { ComponentsModule } from '../components/components.module';
import { PagesRoutingModule } from './pages-routing.module';



@NgModule({
  declarations: [
    HomeComponent,
    JobComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    ComponentsModule,
  ]
})
export class PagesModule { }
