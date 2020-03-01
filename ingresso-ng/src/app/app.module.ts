import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';;

import { NavbarModule } from './components/navbar/navbar.module';
import { MoviesModule } from './pages/movies/movies.module';
import { FooterModule } from './components/footer/footer.module';
import { MovieDetailModule } from './pages/movie-detail/movie-detail.module';
import { LoginModule } from './pages/login/login.module';

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
    FooterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
