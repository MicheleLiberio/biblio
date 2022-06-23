import { DataService } from "./../../services/data-service.service";
import { pageName, actionName } from "../../enum/routes.enum";
import { styleButton } from "./../../../components/button/LbryButton.enum";
import {
  Component,
  Input,
  OnInit,
  Output,
  ViewChild,
  EventEmitter,
} from "@angular/core";
import { sizeModal } from "./../../../components/modal/lbryModal.enum";
import { NgForm } from "@angular/forms";
import data from "../../../files/bookList3.json";
import { Borrow } from "src/app/class/borrow/borrow";
import { ApiService } from "src/app/services/api-service.service";

@Component({
  selector: "search-book",
  templateUrl: "./search-book.component.html",
  styleUrls: ["./search-book.component.scss"],
})
export class SearchBookComponent implements OnInit {
  @Input() indexPage: string;
  @Output() indexPageChange: EventEmitter<string> = new EventEmitter<string>();
  @ViewChild("form", { static: true }) form: NgForm;
  styleButton = styleButton;
  page: string;
  ricerca: string;
  isSearched: boolean = false;
  searchBooks: any;
  openModal: boolean;
  sizeModal = sizeModal;
  books = data;
  indexChosen: number;
  indexPagShow: number;
  array: any;
  arrayTable: any;
  numberItems: number;
  numPagShow: number;
  numPaginationsShow: number[];
  numPaginations: number[];
  remainder: number;
  remainderPagShow: number;
  showPagination: boolean;

  copia: any;
  copie: any;
  idModal: string;
  book: any;

  constructor(
    private dataService: DataService,
    private apiService: ApiService
  ) {}

  ngOnInit() {
    this.books.forEach((book) => {
      if (book.publishedDate) {
        let date = new Date(book.publishedDate.$date);
        if (date) {
          book["date"] = date.getFullYear();
        }
      }
      book["read"] = false;
    });
    if (this.dataService.getSearch()) {
      this.ricerca = this.dataService.getSearch();
      this.submitForm();
    }
  }

  onPageChange(event: string) {
    if (event == actionName.AHEAD) {
      this.dataService.setSearch(this.ricerca);
      this.indexPageChange.emit(pageName.DATATABLES);
    }
  }

  selectPage(page: string) {
    this.page = page;
  }

  submitForm() {
    this.isSearched = true;
    this.searchBooks = [];
    this.apiService.getBooks(this.ricerca).subscribe({
      next: (book) => {
        console.log(book);
        this.searchBooks = book;
        this.array = Object.assign([], this.searchBooks);
        this.numberItems = 5;
        if (this.numberItems < this.searchBooks.length) {
          // mostra la paginazione
          this.showPagination = true;
          // numero di pagine
          let numPag = Math.floor(this.searchBooks.length / this.numberItems);
          this.remainder = this.searchBooks.length % this.numberItems;
          if (this.remainder > 0) {
            numPag++;
          }
          this.numPaginations = Array.from({ length: numPag }, (_, i) => i + 1);
          this.clickNumberPag(1);
          this.indexChosen = 1;
    
          //non mostriamo tutti gli indici ma solo
          //un numero massimo di 5.
          if (numPag > 5) {
            this.numPagShow = Math.floor(numPag / 5);
            this.remainderPagShow = numPag % 5;
            if (this.remainderPagShow > 0) {
              this.numPagShow++;
            }
            this.numPaginationsShow = Array.from({ length: 5 }, (_, i) => i + 1);
            this.indexPagShow = 1;
          } else {
            this.numPaginationsShow = this.numPaginations;
            this.numPagShow = 1;
            this.indexPagShow = 1;
          }
        }
      },
      error: (error) => {
        console.error("There was an error!", error);
      },
    });
    // this.books.forEach((book) => {
    //   if (
    //     Boolean(this.ricerca) &&
    //     (book.title.includes(this.ricerca) ||
    //       book.authors.includes(this.ricerca) ||
    //       book.categories.includes(this.ricerca))
    //   ) {
    //     this.searchBooks.push(book);
    //   }
    // });
  }

  clickNumberGroupPageNext() {
    if (this.indexPagShow === this.numPagShow - 1 && this.remainder > 0) {
      this.numPaginationsShow = Array.from(
        { length: this.remainderPagShow },
        (_, i) => i + this.indexPagShow * 5 + 1
      );
    } else {
      this.numPaginationsShow = Array.from(
        { length: 5 },
        (_, i) => i + this.indexPagShow * 5 + 1
      );
    }
    this.clickNumberPag(this.indexPagShow * 5 + 1);
    this.indexPagShow++;
  }

  clickNumberGroupPageBack() {
    if (this.indexPagShow === 2) {
      this.indexPagShow--;
      this.numPaginationsShow = Array.from({ length: 5 }, (_, i) => i + 1);
    } else {
      this.indexPagShow--;
      this.numPaginationsShow = Array.from(
        { length: 5 },
        (_, i) => i + (this.indexPagShow - 1) * 5 + 1
      );
    }
    this.clickNumberPag((this.indexPagShow - 1) * 5 + 1);
  }

  clickNumberPag(page: number) {
    this.indexChosen = page;
    if (page === this.numPaginations.length && this.remainder !== 0) {
      this.array = this.searchBooks.slice(
        this.numberItems * (page - 1),
        this.numberItems * (page - 1) + this.remainder
      );
    } else {
      this.array = this.searchBooks.slice(
        this.numberItems * (page - 1),
        this.numberItems * page
      );
    }
  }

  clickFirstPage() {
    this.indexChosen = 1;
    this.indexPagShow = 1;
    this.array = this.searchBooks.slice(
      this.numberItems * (this.indexChosen - 1),
      this.numberItems * this.indexChosen
    );
    if (this.numPagShow > 1) {
      this.numPaginationsShow = Array.from({ length: 5 }, (_, i) => i + 1);
    } else {
      this.numPaginationsShow = this.numPaginations;
    }
  }

  clickLastPage() {
    this.indexChosen = this.numPaginations.length;
    this.indexPagShow = this.numPagShow;
    this.array = this.searchBooks.slice(
      this.numberItems * (this.indexChosen - 1),
      this.numberItems * this.indexChosen
    );
    if (this.numPagShow > 1) {
      this.numPaginationsShow = Array.from(
        { length: this.remainderPagShow },
        (_, i) => i + (this.indexPagShow - 1) * 5 + 1
      );
    } else {
      this.numPaginationsShow = this.numPaginations;
    }
  }

  onPrenotabook(book) {
    this.openModal = true;
    this.book = book;
    this.copie = book.copies.filter(copia => copia.stato === 'DISPONIBILE');
  }

  cancel() {
    this.openModal = false;
    this.copia = null;
  }

  conferm() {
    let bookChosen: Borrow;
    bookChosen = {
      title: this.book.title,
      authors: this.book.authors,
      isbn: this.book.isbn,
      copia: this.copia,
      dateBorrow: null,
      dateRestitution: null,
    };
    this.dataService.setBorrow(bookChosen);
    this.onPageChange(actionName.AHEAD);
    this.openModal = false;
  }
}
