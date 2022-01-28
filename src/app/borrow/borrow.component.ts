import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-borrow',
  templateUrl: './borrow.component.html',
  styleUrls: ['./borrow.component.css']
})
export class BorrowComponent implements OnInit {

  indexPage: string;

  constructor(private cdRef : ChangeDetectorRef) { }

  ngOnInit() {
    this.indexPage = '1';
    // localStorage.setItem('page', this.indexPage)
    // if(localStorage.getItem('page')){
    //   this.indexPage = localStorage.getItem('page')
    // } else {
    //   this.indexPage = '1';
    //   localStorage.setItem('page', this.indexPage)
    // }
  }

  ngAfterViewChecked() {
    this.cdRef.detectChanges();
  }

}
