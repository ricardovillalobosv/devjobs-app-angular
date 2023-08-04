import { Component, Input } from '@angular/core';
import { Job } from 'src/app/interfaces/job.interface';

@Component({
  selector: 'app-job-card',
  templateUrl: './job-card.component.html',
  styleUrls: ['./job-card.component.scss'],
})
export class JobCardComponent {
  @Input() job: Job = {};

  getImg(route: string | undefined): string {
    return route?.slice(1, route?.length) || '';
  }
}
