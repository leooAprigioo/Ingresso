import { Tipo_Ingresso } from './tipo_ingresso';
import { Sessao } from './sessao';
import { Usuario } from './usuario';

export class Ingresso {
    public id: number;
    public tipo_ingresso: Tipo_Ingresso;
    public sessao: Sessao;
    public usuario: Usuario;
    public poltrona: string;
    public data_compra: Date;

    constructor(
        id?: number,
        tipo_ingresso?: Tipo_Ingresso,
        sessao?: Sessao,
        usuario?: Usuario,
        poltrona?: string,
        data_compra?: Date
    ) {
        this.id = id;
        this.tipo_ingresso = tipo_ingresso;
        this.sessao = sessao;
        this.usuario = usuario;
        this.poltrona = poltrona;
        this.data_compra = data_compra;
    }
}