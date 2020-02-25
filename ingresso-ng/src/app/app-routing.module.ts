import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { MoviesComponent } from './pages/movies/movies.component';

const routerOptions: ExtraOptions = {
  anchorScrolling: 'enabled',
};

const routes: Routes = [
  {path: 'home', component: MoviesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
