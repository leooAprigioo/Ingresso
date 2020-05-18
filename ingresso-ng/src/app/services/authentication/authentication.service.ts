import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

import { api } from '../../config/global-config';
import { take, map } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
import { LocalStorageService } from '../local-storage/local-storage.service';
import { Usuario } from 'src/app/models/usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  public loginEmitter$ = new BehaviorSubject<boolean>(false);

  private httpHeader = new HttpHeaders()
    .append('Content-type', 'application/json')
    .append('Access-Control-Allow-Origin', '*')

  constructor(
    private httpClient: HttpClient,
    private localStorageService: LocalStorageService
  ) { }

  auth(email, password) {
    const httpParams = new HttpParams()
      .set('email', email)
      .set('senha', password);

    return this.httpClient.get(`${api.path()}/login/${email}/${password}`, {headers: this.httpHeader})
    .pipe(
      take(1),
      map(data => {
        let user = this.buildUsuario(data);
        let isLogged = this.loggingUser(user);
        this.loginEmitter$.next(isLogged);
        return isLogged
      })
    );
  }

  getCurrentUser() {
    let user = JSON.parse(localStorage.getItem('usuario'));
    return JSON.parse(user);
  }

  logout() {
    this.localStorageService.deleteItem('usuario');
    this.loginEmitter$.next(false);
  }

  private buildUsuario(payload: any) {
    let usuario = new Usuario(
      payload[0].id,
      payload[0].nome,
      payload[0].dataNascimento,
      payload[0].senha,
      payload[0].email,
      payload[0].cpf,
      payload[0].endereco,
      payload[0].admin
    );
    return usuario;
  }

  private loggingUser(data) {
    if (data) {
      console.log(data)
      this.localStorageService.setItem('usuario', JSON.stringify(data));
      return true;
    } else {
      return false;
    }
  }
}
