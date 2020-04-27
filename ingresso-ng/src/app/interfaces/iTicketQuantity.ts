import { Tipo_Ingresso } from '../models/tipo_ingresso';

export interface iTicketQuantity {
    quantity: number,
    id: number,
    tickets: Tipo_Ingresso
}