import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SearchComponent } from './search/search.component';
import { JobCardComponent } from './job-card/job-card.component';
import { InputComponent } from './input/input.component';
import { JobInfoComponent } from './job-info/job-info.component';
import { DotComponent } from './dot/dot.component';
import { ButtonComponent } from './button/button.component';



@NgModule({
  declarations: [
    SearchComponent,
    JobCardComponent,
    InputComponent,
    JobInfoComponent,
    DotComponent,
    ButtonComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    SearchComponent,
    JobCardComponent,
    JobInfoComponent,
    DotComponent,
    ButtonComponent
  ],
})
export class ComponentsModule { }
