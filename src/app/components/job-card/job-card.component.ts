import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Job } from 'src/app/interfaces/job.interface';

@Component({
  selector: 'app-job-card',
  templateUrl: './job-card.component.html',
  styleUrls: ['./job-card.component.scss'],
})
export class JobCardComponent {
  @Input() job: Job = {};

  constructor(private router: Router) {}

  getImg(route: string | undefined): string {
    return route?.slice(1, route?.length) || '';
  }

  toJob(id: number | undefined) {
    console.log('_id', id);
    this.router.navigate(['/job', id]);
  }
}
