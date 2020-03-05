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

  list(): Observable<Filme[]> {
    return this.httpClient.get(`${api.path()}/filme`)
      .pipe(
        take(1),
        map((data: any) => {
          return data.map(
            (item: Filme) => {
              return new Filme(
                item.id,
                item.titulo,
                item.data_lancamento,
                item.ano,
                item.duracao,
                item.genero,
                item.diretor,
                item.atores,
                item.sinopse,
                item.classificacao,
                item.idioma,
                item.pais,
                item.imdb,
                item.poster,
                item.banner,
                item.trailer_url
              );
            })
          
        })
      );
  }

  get(id : number): Observable<Filme> {
    return this.httpClient.get(`${api.path()}/filme/${id.toString()}`)
      .pipe(
        take(1),
        map((data: Filme) => {
          
          return new Filme(
            data[0].id,
            data[0].titulo,
            data[0].data_lancamento,
            data[0].ano,
            data[0].duracao,
            data[0].genero,
            data[0].diretor,
            data[0].atores,
            data[0].sinopse,
            data[0].classificacao,
            data[0].idioma,
            data[0].pais,
            data[0].imdb,
            data[0].poster,
            data[0].banner,
            data[0].trailer_url,
            data[0].em_cartaz
          );
        })
      );
  }

  post(params: Filme) {
    console.log(params);
    return this.httpClient.post(`${api.path()}/filme/criar`, JSON.stringify(params), {headers: this.httpHeader});
  }

  put(params: Filme) {
    return this.httpClient.put(`${api.path()}/filme/update/${params.id}`, JSON.stringify(params), {headers: this.httpHeader});
  }

  delete (id: number) {
    return this.httpClient.delete(`${api.path()}/filme/delete/${id}`);
  }

}
