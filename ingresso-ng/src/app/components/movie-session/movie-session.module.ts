import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieSessionComponent } from './movie-session.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [MovieSessionComponent],
  imports: [
    CommonModule,
    FontAwesomeModule,
    RouterModule
  ],
  exports: [
    MovieSessionComponent
  ]
})
export class MovieSessionModule { }
