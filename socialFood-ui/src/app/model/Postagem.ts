import { Tema } from './Tema';

export class Postagem{
    public id: number;
    public titulo: string;
    public texto: string;
    public data: Date;
    public status: boolean;
    public regiao: string;
    public tema: Tema;
}