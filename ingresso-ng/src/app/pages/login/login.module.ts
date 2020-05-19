import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ErrorLabelModule } from 'src/app/components/error-label/error-label.module';
import { SocialLoginModule, GoogleLoginProvider, AuthServiceConfig } from 'angularx-social-login';

// let config = new AuthServiceConfig([
//   {
//     id: GoogleLoginProvider.PROVIDER_ID,
//     provider: new GoogleLoginProvider('')
//   }
// ]);

// export function provideConfig() {
//   return config;
// }

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    FontAwesomeModule,
    RouterModule,
    FormsModule,
    ErrorLabelModule,
    ReactiveFormsModule,
    //SocialLoginModule
  ],
  exports:[
    LoginComponent
  ],
  // providers: [
  //   {
  //     provide: AuthServiceConfig,
  //     useFactory: provideConfig
  //   }
  // ]
})
export class LoginModule { }
