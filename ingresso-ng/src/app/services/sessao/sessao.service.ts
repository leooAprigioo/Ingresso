import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { take, map } from 'rxjs/operators';

import { api } from '../../config/global-config';
import { Sessao } from 'src/app/models/sessao';
import { Observable } from 'rxjs';
import { Filme } from 'src/app/models/filme';
import { Sala } from 'src/app/models/sala';

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
          let session = new Sessao();
          
          session.id = data[0].id;
          session.sala_id = new Sala(
            data[0].sala.id,
            data[0].sala.nome,
            data[0].sala.quantidade_fileira,
            data[0].sala.quantidade_assento,
            data[0].sala.tipo_sala
          );
          session.filme_id = new Filme(
            data[0].filme.id, 
            data[0].filme.titulo,
            new Date(data[0].filme.data_lancamento),
            data[0].filme.ano,
            data[0].filme.duracao,
            data[0].filme.genero,
            data[0].filme.diretor,
            data[0].filme.atores,
            data[0].filme.sinopse,
            data[0].filme.classificacao,
            data[0].filme.idioma,
            data[0].filme.pais,
            data[0].filme.imdb,
            data[0].filme.poster,
            data[0].filme.banner,
            data[0].filme.trailer_url,
            data[0].filme.em_cartaz
          );
          session.data_horario_inicio = new Date(data[0].data_horario_inicio);
          session.formato = data[0].formato;
          session.dublado = data[0].dublado;

          return session
        })
      );
  }

  getByMovie(filme: Filme): Observable<Sessao[]> {
    return this.httpClient.get(`${api.path()}/sessao/porFilme/${filme.id}`)
      .pipe(
        take(1),
        map((data: any[]) => {
          return data.map(sessao => {
            return new Sessao(
              sessao.id,
              new Sala(sessao.sala.id, sessao.sala.nome, sessao.sala.quantidade_fileira, sessao.sala.quantidade_assento, sessao.sala.tipo_sala),
              sessao.filme_id = new Filme(
                data[0].filme.id, 
                data[0].filme.titulo,
                new Date(data[0].filme.data_lancamento),
                data[0].filme.ano,
                data[0].filme.duracao,
                data[0].filme.genero,
                data[0].filme.diretor,
                data[0].filme.atores,
                data[0].filme.sinopse,
                data[0].filme.classificacao,
                data[0].filme.idioma,
                data[0].filme.pais,
                data[0].filme.imdb,
                data[0].filme.poster,
                data[0].filme.banner,
                data[0].filme.trailer_url,
                data[0].filme.em_cartaz
              ),
              new Date(sessao.data_horario_inicio),
              sessao.formato,
              sessao.dublado
            );
        })
      }))
  }

  getDatesByMovie(filme: Filme): Observable<Sessao[]> {
    return this.httpClient.get(`${api.path()}/sessao/obterDatasPorFilme/${filme.id}`)
      .pipe(
        take(1),
        map((data: any[]) => {
          return data.map(sessao => {
            return new Sessao(
              sessao.id,
              new Sala(sessao.sala_id),
              sessao.filme_id,
              new Date(sessao.data_horario_inicio),
              sessao.formato,
              sessao.dublado
            );
        })
      }))
  }

  getUnavailableSeat(session: Sessao): Observable<string[]> {
    return this.httpClient.get(`${api.path()}/sessao/poltronaIndisponivel/${session.id}`)
      .pipe(
        take(1),
        map((data: any[]) => {
          return data.map(item => item.poltrona)
      }));
  }

  post(params: Sessao) {
    return this.httpClient.post(`${api.path()}/sessao/criar`, JSON.stringify(params), {headers: this.httpHeader});
  }

  put(params: Sessao) {
    return this.httpClient.put(`${api.path()}/sessao/update/${params.id}`, JSON.stringify(params), {headers: this.httpHeader});
  }

  delete (id: number) {
    return this.httpClient.delete(`${api.path()}/sessao/delete/${id}`);
  }
}
