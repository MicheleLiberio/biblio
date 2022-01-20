import { styleButton } from "./../../../components/button/LbryButton.enum";
import { Component, OnInit, ViewChild } from "@angular/core";
import { sizeModal } from "./../../../components/modal/lbryModal.enum";
import { NgForm } from "@angular/forms";
import data from "../../../files/bookList2.json";

@Component({
  selector: "search-book",
  templateUrl: "./search-book.component.html",
  styleUrls: ["./search-book.component.scss"],
})
export class SearchBookComponent implements OnInit {
  @ViewChild("form", { static: true }) form: NgForm;

  styleButton = styleButton;
  page: string;
  model = {
    autore: "",
    libro: "",
    casaEditrice: "",
    annoPubblicazione: "",
  };

  ricerca: string;

  isSearched: boolean = false;

  searchBooks: any;

  openModal: boolean;

  sizeModal = sizeModal;

  books = data;

  constructor() {}

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
  }

  selectPage(page: string) {
    this.page = page;
  }

  submitForm(form: NgForm) {
    this.isSearched = true;
    console.log("Form submission");
    this.searchBooks = [];
    this.books.forEach((book) => {
      if (
        Boolean(this.ricerca) &&
        (book.title.includes(this.ricerca) ||
          book.authors.includes(this.ricerca) ||
          book.categories.includes(this.ricerca))
      ) {
        this.searchBooks.push(book);
      }
    });
    console.log(this.searchBooks);
  }
}
