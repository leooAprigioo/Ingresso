import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { MoviesComponent } from './pages/movies/movies.component';
import { MovieDetailComponent } from './pages/movie-detail/movie-detail.component';
import { LoginComponent } from './pages/login/login.component';
import { CreateUserComponent } from './pages/user-form/create-user/create-user.component';
import { EditUserComponent } from './pages/user-form/edit-user/edit-user.component';
import { CreateMovieComponent } from './pages/movie-form/create-movie/create-movie.component';
import { EditMovieComponent } from './pages/movie-form/edit-movie/edit-movie.component';
import { CreateSessionComponent } from './pages/session-form/create-session/create-session.component';
import { EditSessionComponent } from './pages/session-form/edit-session/edit-session.component';
import { CreateMovieRoomComponent } from './pages/movie-room-form/create-movie-room/create-movie-room.component';
import { EditMovieRoomComponent } from './pages/movie-room-form/edit-movie-room/edit-movie-room.component';
import { CreateTicketTypeComponent } from './pages/ticket-type-form/create-ticket-type/create-ticket-type.component';
import { EditTicketTypeComponent } from './pages/ticket-type-form/edit-ticket-type/edit-ticket-type.component';

const routerOptions: ExtraOptions = {
  anchorScrolling: 'enabled',
};

const routes: Routes = [
  {path: '', component: MoviesComponent},
  {path: 'movie', component: MovieDetailComponent},
  {path: 'login', component: LoginComponent},
  {path: 'create-user', component: CreateUserComponent},
  {path: 'edit-user/:userId', component: EditUserComponent},
  {path: 'create-movie', component: CreateMovieComponent},
  {path: 'edit-movie/:movieId', component: EditMovieComponent},
  {path: 'create-session', component: CreateSessionComponent},
  {path: 'edit-session/:sessionId', component: EditSessionComponent},
  {path: 'create-movie-room', component: CreateMovieRoomComponent},
  {path: 'edit-movie-room/:movieRoomId', component: EditMovieRoomComponent},
  {path: 'create-ticket-type', component: CreateTicketTypeComponent},
  {path: 'edit-ticket-type/:ticketTypeId', component: EditTicketTypeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
