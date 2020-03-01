import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieDetailComponent } from './movie-detail.component';
import { AdvisoryRatingModule } from 'src/app/components/advisory-rating/advisory-rating.module';
import { MovieSessionModule } from 'src/app/components/movie-session/movie-session.module';



@NgModule({
  declarations: [MovieDetailComponent],
  imports: [
    CommonModule,
    AdvisoryRatingModule,
    MovieSessionModule
  ]
})
export class MovieDetailModule { }
