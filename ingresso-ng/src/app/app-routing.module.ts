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
import { ListMovieComponent } from './pages/list-movie/list-movie.component';
import { BuyTicketComponent } from './pages/buy-ticket/buy-ticket.component';
import { TicketSeatComponent } from './pages/buy-ticket/ticket-seat/ticket-seat.component';
import { TicketTypeComponent } from './pages/buy-ticket/ticket-type/ticket-type.component';
import { TicketPaymentComponent } from './pages/buy-ticket/ticket-payment/ticket-payment.component';
import { ConfirmOrderComponent } from './pages/buy-ticket/confirm-order/confirm-order.component';

const routerOptions: ExtraOptions = {
  anchorScrolling: 'enabled',
};

const routes: Routes = [
  {path: '', component: MoviesComponent},
  {
    path: 'movie/:id', 
    component: MovieDetailComponent
  },
  {path: 'login', component: LoginComponent},
  {path: 'create-user', component: CreateUserComponent},
  {path: 'edit-user/:id', component: EditUserComponent},
  {path: 'create-movie', component: CreateMovieComponent},
  {path: 'edit-movie/:id', component: EditMovieComponent},
  {path: 'list-movie', component: ListMovieComponent},
  {path: 'create-session', component: CreateSessionComponent},
  {path: 'edit-session/:id', component: EditSessionComponent},
  {path: 'create-movie-room', component: CreateMovieRoomComponent},
  {path: 'edit-movie-room/:id', component: EditMovieRoomComponent},
  {path: 'create-ticket-type', component: CreateTicketTypeComponent},
  {path: 'edit-ticket-type/:id', component: EditTicketTypeComponent},
  {
    path: 'buy-ticket/:sessionId', 
    component: BuyTicketComponent,
    children: [
      {path: 'seat', component: TicketSeatComponent, data: {animation: 'seat'}},
      {path: 'type', component: TicketTypeComponent, data: {animation: 'type'}},
      {path: 'payment', component: TicketPaymentComponent, data: {animation: 'payment'}},
      {path: 'confirm', component: ConfirmOrderComponent, data: {animation: 'confirm'}},

    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
