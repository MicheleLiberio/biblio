import { Copies } from './../copy';
import { Authors } from "../author";

export class Borrow {
    title: string;
    authors: Authors[];
    isbn: string;
    copia: Copies;
    dateBorrow: any;
    dateRestitution: any;
}