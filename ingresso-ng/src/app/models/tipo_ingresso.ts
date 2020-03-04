export class Tipo_Ingresso {
    public id : number;
    public nome : string;
    public preco : number;
    public observacao : string;

    constructor(
        id : number,
        nome : string,
        preco : number,
        observacao : string
    ) {
        this.id = id;
        this.nome = nome;
        this.preco = preco;
        this.observacao = observacao;
    }
}