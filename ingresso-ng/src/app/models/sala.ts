export class Sala {
    public id: number;
    public nome: string;
    public quantidade_fileira: number;
    public quantidade_assento: number;

    constructor(
        id: number,
        nome: string,
        quantidade_fileira: number,
        quantidade_assento: number
    ) {
        this.id = id;
        this.nome = nome;
        this.quantidade_fileira = quantidade_assento;
        this.quantidade_assento = quantidade_fileira;
    }
}