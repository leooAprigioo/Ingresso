import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { take, map } from 'rxjs/operators';

import { api } from '../../config/global-config';
import { Usuario } from 'src/app/models/usuario';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private httpHeader = new HttpHeaders()
    .append('Content-type', 'application/json')
    .append('Access-Control-Allow-Origin', '*')

  constructor(
    private httpClient: HttpClient,
  ) { }

  list(): Observable<Usuario> {
    return this.httpClient.get(`${api.path()}/usuario`)
      .pipe(
        take(1),
        map((data: Usuario) => {
          return new Usuario(
            data.id,
            data.nome,
            data.dataNascimento,
            data.senha,
            data.email,
            data.cpf,
            data.endereco,
            data.admin
          );
        })
      );
  }

  get(id : number): Observable<Usuario> {
    return this.httpClient.get(`${api.path()}/usuario/${id.toString()}`)
      .pipe(
        take(1),
        map((data: Usuario) => {
          return new Usuario(
            data.id,
            data.nome,
            data.dataNascimento,
            data.senha,
            data.email,
            data.cpf,
            data.endereco,
            data.admin
          );
        })
      );
  }

  post(params: Usuario) {
    console.log(params);
    return this.httpClient.post(`${api.path()}/usuario/criar`, JSON.stringify(params), {headers: this.httpHeader});
  }

  put(params: Usuario) {
    return this.httpClient.put(`${api.path()}/usuario/update`, params);
  }

  delete (id: number) {
    return this.httpClient.delete(`${api.path()}/usuario/delete/${id}`);
  }

  auth(email, password) {
    const httpParams = new HttpParams()
      .set('email', email)
      .set('senha', password);

    return this.httpClient.get(`${api.path()}/login/${email}/${password}`, {headers: this.httpHeader});
  }

}
