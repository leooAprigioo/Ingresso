export class Filme {
    public id : number;
    public titulo: string;
    public data_lancamento : Date;
    public ano :number;
    public duracao : number;
    public genero : string;
    public diretor : string
    public atores : string;
    public sinopse :string;
    public classificacao : number;
    public idioma : string;
    public pais : string;
    public imdb : number;
    public poster : string;
    public banner : string;
    public trailer_url : string;
    public em_cartaz : boolean;

    constructor (
        id? : number,
        titulo?: string,
        data_lancamento? : Date,
        ano? :number,
        duracao? : number,
        genero? : string,
        diretor? : string,
        atores? : string,
        sinopse? :string,
        classificacao? : number,
        idioma? : string,
        pais? : string,
        imdb? : number,
        poster? : string,
        banner? : string,
        trailer_url? : string,
        em_cartaz? : boolean
    ) {
        this.id = id; 
        this.titulo = titulo;
        this.data_lancamento = data_lancamento;
        this.ano = ano
        this.duracao = duracao;
        this.genero = genero;
        this.diretor = diretor;
        this.atores = atores;
        this.sinopse = sinopse;
        this.classificacao = classificacao;
        this.idioma = idioma;
        this.pais = pais;
        this.imdb = imdb;
        this.poster = poster;
        this.banner = banner;
        this.trailer_url = trailer_url;
        this.em_cartaz = em_cartaz;
    }
}