import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { take, map } from 'rxjs/operators';

import { api } from '../../config/global-config';
import { Tipo_Ingresso } from 'src/app/models/tipo_ingresso';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TipoIngressoService {

  private httpHeader = new HttpHeaders()
    .append('Content-type', 'application/json')
    .append('Access-Control-Allow-Origin', '*')

  constructor(
    private httpClient: HttpClient,
  ) { }

  list(): Observable<Tipo_Ingresso> {
    return this.httpClient.get(`${api.path()}/tipo_ingresso`)
      .pipe(
        take(1),
        map((data: Tipo_Ingresso) => {
          return new Tipo_Ingresso(
            data.id,
            data.nome,
            data.preco,
            data.observacao
          );
        })
      );
  }

  get(id : number): Observable<Tipo_Ingresso> {
    return this.httpClient.get(`${api.path()}/tipo_ingresso/${id.toString()}`)
      .pipe(
        take(1),
        map((data: Tipo_Ingresso) => {
          return new Tipo_Ingresso(
            data.id,
            data.nome,
            data.preco,
            data.observacao
          );
        })
      );
  }

  post(params: Tipo_Ingresso) {
    console.log(params);
    return this.httpClient.post(`${api.path()}/tipo_ingresso/criar`, JSON.stringify(params), {headers: this.httpHeader});
  }

  put(params: Tipo_Ingresso) {
    return this.httpClient.put(`${api.path()}/tipo_ingresso/update`, params);
  }

  delete (id: number) {
    return this.httpClient.delete(`${api.path()}/tipo_ingresso/delete/${id}`);
  }
}
