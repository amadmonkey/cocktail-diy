import { Component, Input } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-drink',
  templateUrl: './drink.component.html',
  styleUrls: ['./drink.component.scss'],
})
export class DrinkComponent {
  @Input() drink: any = null;
  @Input() enhanced: boolean = false;

  ingredients: any = [];
  colors: any = {};

  constructor(private dataService: DataService) {
    this.colors = this.dataService.getColor();
  }

  ngAfterContentInit() {
    for (let x = 1; x < 16; x++) {
      const ingredient = this.drink[`strIngredient${x}`];
      const measure = this.drink[`strMeasure${x}`];
      const color =
        this.colors[this.drink[`strIngredient${x}`]?.replaceAll(' ', '_')];
      if (ingredient && measure) {
        this.ingredients.push({
          name: ingredient,
          measure: measure,
          color: color,
        });
      }
    }
  }
}
