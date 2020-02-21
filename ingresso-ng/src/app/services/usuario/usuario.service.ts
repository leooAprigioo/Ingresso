import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { take, map } from 'rxjs/operators';

import { api } from '../../config/global-config';
import { Usuario } from 'src/app/models/usuario';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

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

  post(params: Usuario[]) {
    return this.httpClient.post(`${api.path()}/usuario`, params);
  }

  put(params: Usuario[]) {
    return this.httpClient.put(`${api.path()}/usuario`, params);
  }

  // delete (id: number) {
  //   re
  // }


}
