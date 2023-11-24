import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  @Output() search: any = new EventEmitter<any>();

  formState = '';
  searchForm = this.formBuilder.group({
    searchStr: ['', Validators.required],
  });

  constructor(private router: Router, private formBuilder: FormBuilder) {}

  onSubmit() {
    this.router.navigate(['/'], {
      queryParams: { q: this.searchForm.controls.searchStr.value },
    });
  }
}
