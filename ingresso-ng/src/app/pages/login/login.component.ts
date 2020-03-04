import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { UsuarioService } from 'src/app/services/usuario/usuario.service';
import { LocalStorageService } from 'src/app/services/local-storage/local-storage.service';
import { Usuario } from 'src/app/models/usuario';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  faArrowRight = faArrowRight;

  formGroup: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private usuarioService: UsuarioService,
    private localStorageService: LocalStorageService
  ) { }

  ngOnInit() {
    this.initializeForm();
  }

  submit() {
    console.log(this.formGroup);
    if (!this.formGroup.valid) {
      return false;
    }

    const email = this.formGroup.controls.email.value;
    const password = this.formGroup.controls.password.value;

    console.log(email, password);
    this.usuarioService.auth(email, password).subscribe(
      (data: Usuario) => this.localStorageService.setItem('usuario', data),
      (err => console.log(err))
      );

    
  }

  initializeForm() {
    this.formGroup = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

}
