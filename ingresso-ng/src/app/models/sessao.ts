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
        id: number,
        sala_id: Sala,
        filme_id: Filme,
        data_horario_inicio: Date,
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
}