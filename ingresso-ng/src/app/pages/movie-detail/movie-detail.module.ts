import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieDetailComponent } from './movie-detail.component';
import { AdvisoryRatingModule } from 'src/app/components/advisory-rating/advisory-rating.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { YoutubeVideoModule } from 'src/app/components/youtube-video/youtube-video.module';
import { MovieDateCarouselComponent } from './movie-date-carousel/movie-date-carousel.component';
import { MovieSessionComponent } from './movie-session/movie-session.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MovieSessionFilterComponent } from './movie-session-filter/movie-session-filter.component';
import { FormsModule } from '@angular/forms';
import { MovieSessionsAvailableComponent } from './movie-sessions-available/movie-sessions-available.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    MovieDetailComponent, 
    MovieDateCarouselComponent,
    MovieSessionComponent,
    MovieSessionFilterComponent,
    MovieSessionsAvailableComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    YoutubeVideoModule,
    AdvisoryRatingModule,
    FontAwesomeModule,
    FormsModule,
    RouterModule
  ]
})
export class MovieDetailModule { }
