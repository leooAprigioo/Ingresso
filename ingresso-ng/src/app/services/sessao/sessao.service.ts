import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { take, map } from 'rxjs/operators';

import { api } from '../../config/global-config';
import { Sessao } from 'src/app/models/sessao';
import { Observable } from 'rxjs';
import { Filme } from 'src/app/models/filme';

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

  list(): Observable<Sessao[]> {
    return this.httpClient.get(`${api.path()}/sessao`)
      .pipe(
        take(1),
        map((data: any) => {
          return data.map((item: Sessao) => {
          return new Sessao(
            item.id,
            item.sala_id,
            item.filme_id,
            item.data_horario_inicio,
            item.formato,
            item.dublado
          );
        })
        }));
  }

  get(id : number): Observable<Sessao> {
    return this.httpClient.get(`${api.path()}/sessao/${id.toString()}`)
      .pipe(
        take(1),
        map((data: Sessao) => {
          console.log(data)
          return new Sessao(
            data[0].id,
            data[0].sala_id,
            data[0].filme_id,
            data[0].data_horario_inicio,
            data[0].formato,
            data[0].dublado
          );
        })
      );
  }

  getByMovie(filme: Filme): Observable<Sessao[]> {
    return this.httpClient.get(`${api.path()}/sessao/porFilme/${filme.id}`)
      .pipe(
        take(1),
        map((data: Sessao[]) => {
          console.log(data)
          return data.map(sessao => {
            return new Sessao(
              sessao.id,
              sessao.sala_id,
              sessao.filme_id,
              new Date(sessao.data_horario_inicio),
              sessao.formato,
              sessao.dublado
            );
        })
      }))
  }

  post(params: Sessao) {
    console.log(params);
    return this.httpClient.post(`${api.path()}/sessao/criar`, JSON.stringify(params), {headers: this.httpHeader});
  }

  put(params: Sessao) {
    return this.httpClient.put(`${api.path()}/sessao/update/${params.id}`, JSON.stringify(params), {headers: this.httpHeader});
  }

  delete (id: number) {
    return this.httpClient.delete(`${api.path()}/sessao/delete/${id}`);
  }
}
