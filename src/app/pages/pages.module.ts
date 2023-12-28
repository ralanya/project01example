import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { FavoritesComponent } from './favorites/favorites.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    FavoritesComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
