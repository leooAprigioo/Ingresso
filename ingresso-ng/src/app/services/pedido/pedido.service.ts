import { Injectable } from '@angular/core';
import { Pedido } from 'src/app/models/pedido';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { api } from 'src/app/config/global-config';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  private httpHeader = new HttpHeaders()
  .append('Content-type', 'application/json')
  .append('Access-Control-Allow-Origin', '*')

  constructor(
    private httpClient: HttpClient
  ) { }

  newOrder(order: Pedido) {
    return this.httpClient.post(`${api.path()}/pedido/criar`, order, {headers: this.httpHeader});
  }
}
