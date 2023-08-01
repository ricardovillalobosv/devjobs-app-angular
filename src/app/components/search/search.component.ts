import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  searchForm: FormGroup;

  constructor() {
    this.searchForm = new FormGroup({
      search: new FormControl('', Validators.required)
    })
  }

}
