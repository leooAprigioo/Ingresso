import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieSessionComponent } from './movie-session.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [MovieSessionComponent],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [
    MovieSessionComponent
  ]
})
export class MovieSessionModule { }
