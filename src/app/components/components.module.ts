import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SearchComponent } from './search/search.component';
import { JobCardComponent } from './job-card/job-card.component';
import { InputComponent } from './input/input.component';



@NgModule({
  declarations: [
    SearchComponent,
    JobCardComponent,
    InputComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    SearchComponent,
    JobCardComponent
  ],
})
export class ComponentsModule { }
