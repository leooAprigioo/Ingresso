import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieFormComponent } from './movie-form.component';
import { CreateMovieComponent } from './create-movie/create-movie.component';
import { EditMovieComponent } from './edit-movie/edit-movie.component';
import { AdminSidebarModule } from 'src/app/components/admin-sidebar/admin-sidebar.module';



@NgModule({
  declarations: [MovieFormComponent, CreateMovieComponent, EditMovieComponent],
  imports: [
    CommonModule,
    AdminSidebarModule
  ],
  exports: [
    CreateMovieComponent, 
    EditMovieComponent
  ]
})
export class MovieFormModule { }
