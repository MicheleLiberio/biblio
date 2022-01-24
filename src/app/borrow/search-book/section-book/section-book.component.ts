import { Component, OnInit, Input } from "@angular/core";
import { styleButton } from "./../../../../components/button/LbryButton.enum";
import { sizeModal } from "./../../../../components/modal/lbryModal.enum";

@Component({
  selector: "section-book",
  templateUrl: "./section-book.component.html",
  styleUrls: ["./section-book.component.scss"],
})
export class SectionBookComponent implements OnInit {
  @Input() book: any;

  styleButton = styleButton;

  openModal: boolean;

  sizeModal = sizeModal;

  copia: any;

  constructor() {}

  ngOnInit() {}

  readMore(event: any) {
    event.read = !event.read;
  }

  prova(event: any) {
    // console.log(event);
    this.openModal = true;
  }

  cancel(event) {
    this.openModal = false;
  }

  conferm(event){
    console.log('onaoincao');
    console.log(this.book);
    let bookChosen = {
      "title": this.book.title,
      "authors": this.book.authors
    }
    localStorage.setItem('book', JSON.stringify(bookChosen));
    this.openModal = false;
  }
}
