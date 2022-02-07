import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Borrow } from 'src/app/class/borrow/borrow';
import { pageName } from 'src/app/enum/routes.enum';
import { DataService } from 'src/app/services/data-service.service';
import { styleButton } from "./../../../components/button/LbryButton.enum";
import { sizeModal } from "./../../../components/modal/lbryModal.enum";


@Component({
  selector: 'data-tables',
  templateUrl: './data-tables.component.html',
  styleUrls: ['./data-tables.component.scss']
})
export class DataTablesComponent implements OnInit {

  @Input() indexPage: string;
  @Output() indexPageChange: EventEmitter<string> = new EventEmitter<string>();
  sizeModal = sizeModal;
  styleButton = styleButton;
  bookChosen: Borrow;
  
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.bookChosen = this.dataService.getBorrow();
  }


  goBack() {
    this.indexPageChange.emit(pageName.SEARCHBOOK);
  }
}
