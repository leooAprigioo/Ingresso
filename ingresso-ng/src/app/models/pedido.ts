import { Ingresso } from './ingresso';
import { Usuario } from './usuario';
import { DadosPagamento } from './dados_pagamento';

export class Pedido {
    public id: number;
    public ingressos: Ingresso[];
    public totalPagamento: number;
    public dataPedido: Date;
    public usuario: Usuario
    public dadosPagamento: DadosPagamento;

    constructor(
        id?: number,
        ingressos?: Ingresso[],
        totalPagamento?: number,
        dataPedido?: Date,
        usuario?: Usuario,
        dadosPagamento: DadosPagamento = new DadosPagamento(),
    ) {
        this.id = id;
        this.ingressos = ingressos;
        this.totalPagamento = totalPagamento;
        this.dataPedido = dataPedido;
        this.usuario = usuario;
        this.dadosPagamento = dadosPagamento;
    }

}