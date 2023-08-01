import { Component } from '@angular/core';
import data from '../../data/data.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  jobs = data;

  constructor() {
    console.log('data', this.jobs);
  }
}
