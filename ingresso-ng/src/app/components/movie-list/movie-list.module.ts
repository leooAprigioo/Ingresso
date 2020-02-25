import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieListComponent } from './movie-list.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MoviePosterModule } from '../movie-poster/movie-poster.module';

@NgModule({
  declarations: [MovieListComponent],
  imports: [
    CommonModule,
    FontAwesomeModule,
    MoviePosterModule
  ],
  exports: [MovieListComponent]
})
export class MovieListModule { }
