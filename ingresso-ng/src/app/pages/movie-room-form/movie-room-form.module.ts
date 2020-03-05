import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieRoomFormComponent } from './movie-room-form.component';
import { CreateMovieRoomComponent } from './create-movie-room/create-movie-room.component';
import { EditMovieRoomComponent } from './edit-movie-room/edit-movie-room.component';
import { RouterModule } from '@angular/router';
import { AdminSidebarModule } from 'src/app/components/admin-sidebar/admin-sidebar.module';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { SalaService } from 'src/app/services/sala/sala.service';


@NgModule({
  declarations: [MovieRoomFormComponent, CreateMovieRoomComponent, EditMovieRoomComponent],
  imports: [
    CommonModule,
    RouterModule,
    AdminSidebarModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    CreateMovieRoomComponent,
    EditMovieRoomComponent
  ]
})
export class MovieRoomFormModule { }
