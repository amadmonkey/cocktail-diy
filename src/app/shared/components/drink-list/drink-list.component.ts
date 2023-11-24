import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-drink-list',
  templateUrl: './drink-list.component.html',
  styleUrls: ['./drink-list.component.scss'],
})
export class DrinkListComponent {
  isPopular: boolean = true;
  query: any;
  drinks: any = null;
  popular: any = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private dataService: DataService
  ) {}

  trackByFn(index: number, item: { id: any }) {
    return item.id + index;
  }

  ngOnInit() {
    this.activatedRoute.queryParamMap.subscribe((params) => {
      this.drinks = null;
      this.isPopular = false;
      if (params.get('q')) {
        this.dataService.search(params.get('q')).subscribe((response) => {
          this.drinks = response ? response : [];
        });
      } else {
        this.isPopular = true;
        this.dataService.getPopular().subscribe((response) => {
          if (this.drinks === null) {
            this.drinks = [];
          }
          this.drinks.push(response);
        });
      }
    });
  }
}
