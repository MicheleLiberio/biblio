import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Borrow } from "src/app/class/borrow/borrow";
import { pageName } from "src/app/enum/routes.enum";
import { DataService } from "src/app/services/data-service.service";
import { styleButton } from "./../../../components/button/LbryButton.enum";
import { sizeModal } from "./../../../components/modal/lbryModal.enum";
import { User } from "src/app/class/user/user";
import { patternInput } from "src/components/input/lbryInput.enum";

@Component({
  selector: "data-tables",
  templateUrl: "./data-tables.component.html",
  styleUrls: ["./data-tables.component.scss"],
})
export class DataTablesComponent implements OnInit {
  @Input() indexPage: string;
  @Output() indexPageChange: EventEmitter<string> = new EventEmitter<string>();
  @ViewChild("bookForm", { static: true }) bookForm: NgForm;
  @ViewChild("userForm", { static: true }) userForm: NgForm;
  sizeModal = sizeModal;
  styleButton = styleButton;
  bookChosen: Borrow;
  dateBorrow: string;
  dateReturn: string;
  user: User;
  patternInput = patternInput;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.bookChosen = this.dataService.getBorrow();
    let now = new Date();
    let today = this.getDate(now);
    this.dateBorrow = today;
    this.dateReturn = this.getDate(this.getReturnDate(now));
    this.user = {
      name: null,
      surname: null,
      address: null,
      town: null,
      zip: null,
      telephone: null,
      email: null
    }
  }

  goBack() {
    this.indexPageChange.emit(pageName.SEARCHBOOK);
  }

  getDate(date: Date) {
    let day = ("0" + date.getDate()).slice(-2);
    let month = ("0" + (date.getMonth() + 1)).slice(-2);
    let newDate = date.getFullYear() + "-" + month + "-" + day;
    return newDate;
  }

  getReturnDate(date: Date) {
    let ret = new Date(date.setDate(date.getDate() + 14))
    if (ret.getDay() == 6) {
      ret = new Date(date.setDate(date.getDate() + 2))
    } else if (ret.getDay() == 7) {
      ret = new Date(date.setDate(date.getDate() + 1))
    }
    return ret;
  }

  getDateBorrow(date: any) {
    console.log(date);
    let newDate = this.getReturnDate(new Date(date));
    this.dateReturn = this.getDate(newDate);
  }

  goForward(){

  }

  check(){
    return !(this.bookForm.valid && this.userForm.valid);
  }
}
