export class Sala {
    public id: number;
    public nome: string;
    public quantidade_fileira: number;
    public quantidade_assento: number;
    public tipo_sala: string;
    constructor(
        id?: number,
        nome?: string,
        quantidade_fileira?: number,
        quantidade_assento?: number,
        tipo_sala?: string,
    ) {
        this.id = id;
        this.nome = nome;
        this.quantidade_fileira = quantidade_assento;
        this.quantidade_assento = quantidade_fileira;
        this.tipo_sala= tipo_sala;
    }

    static createMock() {
        let sala = new Sala();

        sala.nome = `Sala  ${Math.round(Math.random() * 10) }`;
        
        return sala;
    }
}