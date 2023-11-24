import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DrinkListComponent } from './shared/components/drink-list/drink-list.component';
import { DrinkDetailsComponent } from './shared/components/drink-details/drink-details.component';

const routes: Routes = [
  { path: '', component: DrinkListComponent },
  { path: ':id', component: DrinkDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
