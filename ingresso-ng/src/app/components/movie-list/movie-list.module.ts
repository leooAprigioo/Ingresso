import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieListComponent } from './movie-list.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [MovieListComponent],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [MovieListComponent]
})
export class MovieListModule { }
