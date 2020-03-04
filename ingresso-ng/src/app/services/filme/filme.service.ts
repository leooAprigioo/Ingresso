import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { take, map } from 'rxjs/operators';

import { api } from '../../config/global-config';
import { Filme } from 'src/app/models/filme';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FilmeService {

  private httpHeader = new HttpHeaders()
    .append('Content-type', 'application/json')
    .append('Access-Control-Allow-Origin', '*')

  constructor(
    private httpClient: HttpClient,
  ) { }

  list(): Observable<Filme> {
    return this.httpClient.get(`${api.path()}/filme`)
      .pipe(
        take(1),
        map((data: Filme) => {
          return new Filme(
            data.id,
            data.titulo,
            data.data_lancamento,
            data.ano,
            data.duracao,
            data.genero,
            data.diretor,
            data.atores,
            data.sinopse,
            data.classificacao,
            data.idioma,
            data.pais,
            data.imdb,
            data.poster,
            data.banner,
            data.trailer_url
          );
        })
      );
  }

  get(id : number): Observable<Filme> {
    return this.httpClient.get(`${api.path()}/filme/${id.toString()}`)
      .pipe(
        take(1),
        map((data: Filme) => {
          return new Filme(
            data.id,
            data.titulo,
            data.data_lancamento,
            data.ano,
            data.duracao,
            data.genero,
            data.diretor,
            data.atores,
            data.sinopse,
            data.classificacao,
            data.idioma,
            data.pais,
            data.imdb,
            data.poster,
            data.banner,
            data.trailer_url
          );
        })
      );
  }

  post(params: Filme) {
    console.log(params);
    return this.httpClient.post(`${api.path()}/filme/criar`, JSON.stringify(params), {headers: this.httpHeader});
  }

  put(params: Filme) {
    return this.httpClient.put(`${api.path()}/filme/update`, params);
  }

  delete (id: number) {
    return this.httpClient.delete(`${api.path()}/filme/delete/${id}`);
  }

}
