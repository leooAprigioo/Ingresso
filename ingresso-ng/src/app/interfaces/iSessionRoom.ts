import { Sessao } from '../models/sessao';

export interface iSessionRoom {
    roomName?: string;
    sessions?: Sessao[]
}