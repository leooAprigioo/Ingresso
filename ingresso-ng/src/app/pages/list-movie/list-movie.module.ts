import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListMovieComponent } from './list-movie.component';
import { RouterModule } from '@angular/router';
import { AdminSidebarModule } from 'src/app/components/admin-sidebar/admin-sidebar.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [ListMovieComponent],
  imports: [
    CommonModule,
    RouterModule,
    AdminSidebarModule,
    FontAwesomeModule
  ],
  exports: [
    ListMovieComponent
  ]
})
export class ListMovieModule { }
