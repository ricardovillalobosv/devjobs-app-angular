import { Component } from '@angular/core';
import data from '../../data/data.json';
import { Job } from 'src/app/interfaces/job.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  jobs: Job[] = data;

  constructor() {
    console.log('data', this.jobs);
  }
}
