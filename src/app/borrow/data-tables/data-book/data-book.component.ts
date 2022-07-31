import { patternInput } from '../../../../components/input/lbryInput.enum';
import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Borrow } from 'src/app/class/borrow/borrow';
import { DataService } from 'src/app/services/data-service.service';
import { ApiService } from 'src/app/services/api-service.service';
import { pageName } from 'src/app/enum/routes.enum';
import { styleButton } from 'src/components/button/LbryButton.enum';

@Component({
  selector: 'data-book',
  templateUrl: './data-book.component.html',
  styleUrls: ['./data-book.component.css']
})
export class DataBookComponent implements OnInit {
  @Input() indexPage: string;
  @Output() indexPageChange: EventEmitter<string> = new EventEmitter<string>();
  @ViewChild("bookForm", { static: true }) bookForm: NgForm;
  styleButton = styleButton;
  bookChosen: Borrow;
  dateBorrow: string;
  dateReturn: string;
  patternInput = patternInput;
  authors: any;

  constructor(
    private dataService: DataService
  ) {}

  ngOnInit() {
    this.bookChosen = this.dataService.getBorrow();
    let now = new Date();
    let today = this.getDate(now);
    this.bookChosen.dateBorrow = today;
    this.bookChosen.dateRestitution = this.getDate(this.getReturnDate(now));
    this.authors = this.bookChosen.authors.map((author) => author.name);
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
    let ret = new Date(date.setDate(date.getDate() + 14));
    if (ret.getDay() == 6) {
      ret = new Date(date.setDate(date.getDate() + 2));
    } else if (ret.getDay() == 7) {
      ret = new Date(date.setDate(date.getDate() + 1));
    }
    return ret;
  }

  getDateBorrow(date: any) {
    console.log(date);
    let newDate = this.getReturnDate(new Date(date));
    this.dateReturn = this.getDate(newDate);
  }

  submitForm(userForm) {
    console.log("prova");
  }
  
  goForward() {
    // this.indexPageChange.emit(pageName.CONFIRM);
  }

  check() {
    return false; /*!(this.bookForm.valid && this.userForm.valid);*/
  }

}
