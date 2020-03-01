import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    FontAwesomeModule,
  ],
  exports:[
    LoginComponent
  ]
})
export class LoginModule { }
