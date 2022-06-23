import { Authors } from "../author";
import { Categories } from "../category";
import { Copies } from "../copy";

export class Book {
    title: string;
     isbn: string;
     pageCount: number;
     publishedDate: string;
     thumbnailUrl: string;
     shortDescription: string;
     longDescription: string;
     status: string;
     authors: Authors[];
     categories: Categories[];
     copie: Copies[];
}
