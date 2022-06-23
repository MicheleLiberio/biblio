import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { styleButton } from "./../../../../components/button/LbryButton.enum";
import { sizeModal } from "./../../../../components/modal/lbryModal.enum";

@Component({
  selector: "section-book",
  templateUrl: "./section-book.component.html",
  styleUrls: ["./section-book.component.scss"],
})
export class SectionBookComponent implements OnInit {
  @Input() book: any;
  @Output() pageChange: EventEmitter<string> = new EventEmitter<string>();
  @Output() prenotabook: EventEmitter<string> = new EventEmitter<string>();
  styleButton = styleButton;
  openModal: boolean;
  sizeModal = sizeModal;
  copia: any;
  copie: any;
  idModal: string;
  availables: any;
  
  constructor() {}

  ngOnInit() {
    this.idModal = "prova";
    this.availables = this.book.copies.filter((copia) => copia.stato === "DISPONIBILE")
  }

  readMore(event: any) {
    event.read = !event.read;
  }

  prenota() {
    this.prenotabook.emit(this.book);
  }
}
