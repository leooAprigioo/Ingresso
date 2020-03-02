import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviePosterComponent } from './movie-poster.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AdvisoryRatingModule } from '../advisory-rating/advisory-rating.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [MoviePosterComponent],
  imports: [
    CommonModule,
    FontAwesomeModule,
    AdvisoryRatingModule,
    RouterModule
  ],
  exports: [MoviePosterComponent]
})
export class MoviePosterModule { }
