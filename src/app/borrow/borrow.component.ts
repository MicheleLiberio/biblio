import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { pageName } from 'src/app/enum/routes.enum';

@Component({
  selector: 'app-borrow',
  templateUrl: './borrow.component.html',
  styleUrls: ['./borrow.component.css']
})
export class BorrowComponent implements OnInit {

  indexPage: string;

  constructor(private cdRef : ChangeDetectorRef) { }

  ngOnInit() {
    this.indexPage = pageName.SEARCHBOOK;
  }

  ngAfterViewChecked() {
    this.cdRef.detectChanges();
  }

}
