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

  list(): Observable<Tipo_Ingresso[]> {
    return this.httpClient.get(`${api.path()}/tipo_ingresso`)
      .pipe(
        take(1),
        map((data: any) => {
          return data.map((item: Tipo_Ingresso) => {
          return new Tipo_Ingresso(
            item.id,
            item.nome,
            item.preco,
            item.observacao
            );
          }) 
        })
      );
  }

  get(id : number): Observable<Tipo_Ingresso> {
    return this.httpClient.get(`${api.path()}/tipo_ingresso/${id.toString()}`)
      .pipe(
        take(1),
        map((data: Tipo_Ingresso) => {
          return new Tipo_Ingresso(
            data[0].id,
            data[0].nome,
            data[0].preco,
            data[0].observacao
          );
        })
      );
  }

  post(params: Tipo_Ingresso) {
    console.log(params);
    return this.httpClient.post(`${api.path()}/tipo_ingresso/criar`, JSON.stringify(params), {headers: this.httpHeader});
  }

  put(params: Tipo_Ingresso) {
    return this.httpClient.put(`${api.path()}/tipo_ingresso/update/${params.id}`, JSON.stringify(params), {headers: this.httpHeader});
  }

  delete (id: number) {
    return this.httpClient.delete(`${api.path()}/tipo_ingresso/delete/${id}`);
  }
}
