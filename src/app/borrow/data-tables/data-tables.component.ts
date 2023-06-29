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
import { Lend } from "src/app/class/lend/lend";
import { pageName } from "src/app/enum/routes.enum";
import { ApiService } from "src/app/services/api-service.service";
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
    private dataService: DataService,
    private apiService: ApiService
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
    let borrow = this.dataService.getBorrow();
    let lend: Lend = {
      copies: borrow.copia,
      expectedReturningDate: borrow.dateRestitution,
      isLent: true,
      lendindDate: borrow.dateBorrow,
      readers: this.dataService.getUser(),
      returningDate: null,
    };
    this.apiService.setLend(lend).subscribe({
      next: (lend) => {
        console.log(lend);
        this.indexPageChange.emit(pageName.CONFIRM);
      },
      error: (error) => {
        console.error("There was an error!", error);
        this.indexPageChange.emit(pageName.ERROR);
      },
    });
  }

  check() {
    return !(this.dataService.getBorrow() && this.dataService.getUser());
  }
}
