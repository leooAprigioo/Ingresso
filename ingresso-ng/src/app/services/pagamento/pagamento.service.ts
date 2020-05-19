import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Cielo } from 'src/app/models/cieloApi';
import { api } from 'src/app/config/global-config';

@Injectable({
  providedIn: 'root'
})
export class PagamentoService {

  private httpHeader = new HttpHeaders()
  .append('Content-type', 'application/json')
  .append('Access-Control-Allow-Origin', '*')

  constructor(
    private httpClient: HttpClient,
  ) { }

  post(params: Cielo) {
    console.log(params);
    return this.httpClient.post(`${api.path()}/apiPagamento`, JSON.stringify(params), {headers: this.httpHeader});
  }
}
