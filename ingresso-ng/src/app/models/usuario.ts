export class Usuario {
    public id : number;
    public nome : string;
    public dataNascimento : Date;
    public senha : string;
    public email : string;
    public cpf : string;
    public endereco : string;
    public admin : boolean;

    constructor(
        id : number,
        nome : string,
        dataNascimento : Date,
        senha : string,
        email : string,
        cpf : string = "",
        endereco : string = "",
        admin : boolean = false
    ) {
        this.id = id;
        this.nome = nome;
        this.dataNascimento = dataNascimento;
        this.senha = senha;
        this.email = email;
        this.cpf = cpf;
        this.endereco = endereco;
        this.admin = admin;
    }
}