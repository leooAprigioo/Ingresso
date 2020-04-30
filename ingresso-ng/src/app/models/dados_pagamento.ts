import { TipoPagamento } from './tipo_pagamento';

export class DadosPagamento {
    public id: number;
    public tipoPagamento: TipoPagamento;
    public nomePagador: string;
    public finalCartao: number;
    public parcelas: number;
    public vencimento: Date;
    public codigoBarras: string;

    constructor(
        id?: number,
        tipoPagamento?: TipoPagamento,
        nomePagador?: string,
        finalCartao?: number,
        parcelas?: number,
        vencimento?: Date,
        codigoBarras?: string
    ) {
        this.id = id;
        this.tipoPagamento = tipoPagamento;
        this.nomePagador = nomePagador;
        this.finalCartao = finalCartao;
        this.parcelas = parcelas;
        this.vencimento = vencimento;
        this.codigoBarras = codigoBarras;
    }
}