import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from "@angular/core";
import { NgForm } from "@angular/forms";
import { Borrow } from "src/app/class/borrow/borrow";
import { pageName } from "src/app/enum/routes.enum";
import { DataService } from "src/app/services/data-service.service";
import { styleButton } from "./../../../components/button/LbryButton.enum";

@Component({
  selector: "data-tables",
  templateUrl: "./data-tables.component.html",
  styleUrls: ["./data-tables.component.scss"],
})
export class DataTablesComponent implements OnInit {
  @Input() indexPage: string;
  @Output() indexPageChange: EventEmitter<string> = new EventEmitter<string>();
  @ViewChild("bookForm", { static: true }) bookForm: NgForm;
  styleButton = styleButton;
  bookChosen: Borrow;
  dateBorrow: string;
  dateReturn: string;
  authors: any;

  constructor(
    private dataService: DataService
  ) {}

  ngOnInit() {
    this.bookChosen = this.dataService.getBorrow();
    let now = new Date();
    this.authors = this.bookChosen.authors.map((author) => author.name);
  }

  goBack() {
    this.indexPageChange.emit(pageName.SEARCHBOOK);
  }

  goForward() {
    // this.dataService.setUser(this.user);
    this.indexPageChange.emit(pageName.CONFIRM);
  }

  check() {
    return false; /*!(this.bookForm.valid && this.userForm.valid);*/
  }
}

