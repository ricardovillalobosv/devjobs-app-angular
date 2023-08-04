import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.scss'],
})
export class JobComponent {
  id: number = 0;
  
  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(({ id }) => (this.id = id));
  }
}
