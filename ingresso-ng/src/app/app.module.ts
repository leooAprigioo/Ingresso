import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';;

import { NavbarModule } from './components/navbar/navbar.module';
import { MoviesModule } from './pages/movies/movies.module';
import { FooterModule } from './components/footer/footer.module';
import { MovieDetailModule } from './pages/movie-detail/movie-detail.module';
import { LoginModule } from './pages/login/login.module';
import { UserFormModule } from './pages/user-form/user-form.module';
import { RouterModule } from '@angular/router';
import { MovieFormModule } from './pages/movie-form/movie-form.module';
import { SessionFormModule } from './pages/session-form/session-form.module';
import { MovieRoomFormModule } from './pages/movie-room-form/movie-room-form.module';
import { TicketTypeFormModule } from './pages/ticket-type-form/ticket-type-form.module';
import { ListMovieModule } from './pages/list-movie/list-movie.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavbarModule,
    MoviesModule,
    MovieDetailModule,
    LoginModule,
    UserFormModule,
    MovieFormModule,
    ListMovieModule,
    SessionFormModule,
    MovieRoomFormModule,
    TicketTypeFormModule,
    FooterModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
