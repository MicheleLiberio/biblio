import { styleButton } from "./../../components/button/LbryButton.enum";
import { Component, OnInit, ViewChild } from "@angular/core";
import { sizeModal } from "./../../components/modal/lbryModal.enum";
import { NgForm } from "@angular/forms";
// import data from '../../files/bookList2.ts'

@Component({
  selector: "app-pages",
  templateUrl: "./pages.component.html",
  styleUrls: ["./pages.component.scss"],
})
export class PagesComponent implements OnInit {
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

  
  constructor() {}

  ngOnInit() {
  }

  selectPage(page: string) {
    this.page = page;
  }

  //   control() {
  //     return Boolean(this.model.autore || this.model.libro || this.model.casaEditrice || this.model.annoPubblicazione)
  //   }

  submitForm(form: NgForm) {

  }

  prova(event: any) {
    console.log(event);
    this.openModal = true;
  }

  readMore(event: any) {
    event.read = !event.read;
  }
}
