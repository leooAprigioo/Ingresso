import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesComponent } from './movies.component';

import { BannerModule } from '../../components/banner/banner.module';
import { MovieListModule } from 'src/app/components/movie-list/movie-list.module';

@NgModule({
  declarations: [
    MoviesComponent
  ],
  imports: [
    CommonModule,
    BannerModule,
    MovieListModule
  ],
  exports: [
    MoviesComponent
  ]
})
export class MoviesModule { }
