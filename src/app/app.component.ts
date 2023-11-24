import { Component } from '@angular/core';
import { DataService } from './shared/services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'cocktail-diy';

  list: any = [];

  constructor(private dataService: DataService) {}

  trackByFn(index: number, item: { id: any }) {
    return item.id;
  }

  ngOnInit() {
    this.dataService
      .getPopular()
      .subscribe((response) => this.list.push(response[0]));
  }

  onSearchResponse(list: any) {
    this.list = list;
  }
}
