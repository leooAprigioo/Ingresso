import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { take, map } from 'rxjs/operators';

import { api } from '../../config/global-config';
import { Sala } from 'src/app/models/sala';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SalaService {

  private httpHeader = new HttpHeaders()
    .append('Content-type', 'application/json')
    .append('Access-Control-Allow-Origin', '*')

  constructor(
    private httpClient: HttpClient,
  ) { }

  list(): Observable<Sala> {
    return this.httpClient.get(`${api.path()}/sala`)
      .pipe(
        take(1),
        map((data: Sala) => {
          return new Sala(
            data.id,
            data.nome,
            data.quantidade_fileira,
            data.quantidade_assento
          );
        })
      );
  }

  get(id : number): Observable<Sala> {
    return this.httpClient.get(`${api.path()}/sala/${id.toString()}`)
      .pipe(
        take(1),
        map((data: Sala) => {
          return new Sala(
            data.id,
            data.nome,
            data.quantidade_fileira,
            data.quantidade_assento
          );
        })
      );
  }

  post(params: Sala) {
    console.log(params);
    return this.httpClient.post(`${api.path()}/sala/criar`, JSON.stringify(params), {headers: this.httpHeader});
  }

  put(params: Sala) {
    return this.httpClient.put(`${api.path()}/sala/update`, params);
  }

  delete (id: number) {
    return this.httpClient.delete(`${api.path()}/sala/delete/${id}`);
  }
}
