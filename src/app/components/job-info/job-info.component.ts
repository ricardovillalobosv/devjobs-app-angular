import { Component, Input } from '@angular/core';
import { Requirements } from 'src/app/interfaces/requirements.interface';

@Component({
  selector: 'app-job-info',
  templateUrl: './job-info.component.html',
  styleUrls: ['./job-info.component.scss']
})
export class JobInfoComponent {
  @Input() title: string = '';
  @Input() info: Requirements = {};
  @Input() numbers: boolean = false;
}
