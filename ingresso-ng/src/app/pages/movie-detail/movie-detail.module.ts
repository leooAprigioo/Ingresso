import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieDetailComponent } from './movie-detail.component';
import { AdvisoryRatingModule } from 'src/app/components/advisory-rating/advisory-rating.module';



@NgModule({
  declarations: [MovieDetailComponent],
  imports: [
    CommonModule,
    AdvisoryRatingModule
  ]
})
export class MovieDetailModule { }
