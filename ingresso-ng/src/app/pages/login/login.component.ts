import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from "@angular/router"

import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { UsuarioService } from 'src/app/services/usuario/usuario.service';
import { LocalStorageService } from 'src/app/services/local-storage/local-storage.service';
import { Usuario } from 'src/app/models/usuario';
import { iErrorLabel } from 'src/app/interfaces/iErrorLabel';
import { HttpErrorResponse } from '@angular/common/http';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';
import { AuthService, GoogleLoginProvider } from 'angularx-social-login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {

  faArrowRight = faArrowRight;
  submitted = false;
  formGroup: FormGroup;

  errorLabel : iErrorLabel[];

  constructor(
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService,
    private localStorageService: LocalStorageService,
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.initializeForm();
    this.errorLabel = [
      { label: 'E-mail ou senha inválidos', status: false, receiveMessage: 'usuario não encontrado', statusCode:400 },
      { label: 'Erro de servidor. Contate o administrador da plataforma', status: false, receiveMessage: '', statusCode:500 }
    ];
  }

  submit() {
    this.submitted = true;
    if (!this.formGroup.valid) {
      return false;
    }

    this.authService.authState.subscribe((user) => {
      console.log(user)
    });

    const email = this.formGroup.controls.email.value;
    const password = this.formGroup.controls.password.value;

    this.authenticationService.auth(email, password).subscribe(
      (data: boolean) => {
        this.router.navigate(['/'])
      },
      (err => this.verifyResponseErrors(err)));
  }

  initializeForm() {
    this.formGroup = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  loginWithGoogle() {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  verifyResponseErrors (errorValue:HttpErrorResponse) {
    this.errorLabel = this.errorLabel.map((value) => { value.receiveMessage === errorValue.error.Mensagem ? value.status = true : value.status = false; return value })
  }

}
