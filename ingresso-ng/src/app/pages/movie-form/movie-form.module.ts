import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieFormComponent } from './movie-form.component';
import { CreateMovieComponent } from './create-movie/create-movie.component';
import { EditMovieComponent } from './edit-movie/edit-movie.component';
import { AdminSidebarModule } from 'src/app/components/admin-sidebar/admin-sidebar.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [MovieFormComponent, CreateMovieComponent, EditMovieComponent],
  imports: [
    CommonModule,
    AdminSidebarModule,
    FormsModule, 
    ReactiveFormsModule
  ],
  exports: [
    CreateMovieComponent, 
    EditMovieComponent
  ]
})
export class MovieFormModule { }
