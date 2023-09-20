import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import data from '../../data/data.json';
import { Job } from 'src/app/interfaces/job.interface';
import { Requirements } from 'src/app/interfaces/requirements.interface';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.scss'],
})
export class JobComponent {
  jobs: Job[] = data;
  job: Job = {};

  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(({ id }) => this.getJob(id));
  }

  getJob(id: number) {
    this.job = this.jobs.find((job) => job.id == id) || {};
  }

  get img(): string {
    return this.job.logo?.slice(1, this.job.logo?.length) || '';
  }

  get requirements() {
    return this.job.requirements || {};
  }

  get role() {
    return this.job.role || {};
  }
}
