import { Filme } from './filme';
import { Sala } from './sala';

export class Sessao {
    public id: number;
    public sala_id: Sala;
    public filme_id: Filme;
    public data_horario_inicio: Date; 
    public formato: string;
    public dublado: boolean;

    constructor(
        id?: number,
        sala_id?: Sala,
        filme_id?: Filme,
        data_horario_inicio?: Date,
        formato: string = '2D',
        dublado: boolean = false
    ) {
        this.id = id;
        this.sala_id = sala_id;
        this.filme_id = filme_id;
        this.data_horario_inicio = data_horario_inicio;
        this.formato = formato;
        this.dublado = dublado;
    }

    static createMock(): Sessao {
        let session = new Sessao();
        session.id = Math.round(Math.random() * 100);

        let movie = new Filme();
        session.filme_id = movie;

        let room = Sala.createMock();
        session.sala_id = room;

        let formato = ['2D', '3D'];
        session.formato = formato[Math.round(Math.random())];

        session.dublado = Math.random() > .5;

        let day = [30, 31];
        let month = [1, 2];

        let randomDay = Math.floor(Math.random() * (1 - 0 + 1) ) + 0;
        let randomMonth = Math.floor(Math.random() * (1 - 0 + 1) ) + 0;

        session.data_horario_inicio = new Date(2020, day[randomMonth], day[randomDay], 23, 10, 0);

        return session;
    }
}