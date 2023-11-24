import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../services/data.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-drink-details',
  templateUrl: './drink-details.component.html',
  styleUrls: ['./drink-details.component.scss'],
})
export class DrinkDetailsComponent {
  drink: any = null;

  constructor(
    private activatedRoute: ActivatedRoute,
    private dataService: DataService,
    private location: Location
  ) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.dataService.getDrink(params.get('id')).subscribe((response) => {
        this.drink = response;
        this.drink.strInstructions = this.drink.strInstructions.split('.');
      });
    });
  }

  back(): void {
    this.location.back();
  }
}
