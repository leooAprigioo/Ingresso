import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { take, map } from 'rxjs/operators';

import { api } from '../../config/global-config';
import { Sessao } from 'src/app/models/sessao';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SessaoService {

  private httpHeader = new HttpHeaders()
  .append('Content-type', 'application/json')
  .append('Access-Control-Allow-Origin', '*')

  constructor(
    private httpClient: HttpClient,
  ) { }

  list(): Observable<Sessao> {
    return this.httpClient.get(`${api.path()}/sessao`)
      .pipe(
        take(1),
        map((data: Sessao) => {
          return new Sessao(
            data.id,
            data.sala_id,
            data.filme_id,
            data.data_horario_inicio,
            data.formato,
            data.dublado
          );
        })
      );
  }

  get(id : number): Observable<Sessao> {
    return this.httpClient.get(`${api.path()}/sessao/${id.toString()}`)
      .pipe(
        take(1),
        map((data: Sessao) => {
          return new Sessao(
            data.id,
            data.sala_id,
            data.filme_id,
            data.data_horario_inicio,
            data.formato,
            data.dublado
          );
        })
      );
  }

  post(params: Sessao) {
    console.log(params);
    return this.httpClient.post(`${api.path()}/sessao/criar`, JSON.stringify(params), {headers: this.httpHeader});
  }

  put(params: Sessao) {
    return this.httpClient.put(`${api.path()}/sessao/update`, params);
  }

  delete (id: Sessao) {
    return this.httpClient.delete(`${api.path()}/sessao/delete/${id}`);
  }
}