import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'lbry-filter-col',
  templateUrl: './lbryFilterCol.component.html',
  styleUrls: ['./lbryFilterCol.component.scss']
})
export class LbryFilterColComponent implements OnInit {

  @Input() id: string;
  @Input() title: string;
  @Input() type: string
  @Input() field: string;
  @Input() col: number;
  @Output() getItem = new EventEmitter<any>();
  ngModel: any;

  constructor() { }

  ngOnInit() {
    this.getItem.emit(
      {'id': this.id,
      'title': this.title,
      'type': this.type,
      'field': this.field,
      'ngModel': this.ngModel,
      'col': this.col
      })
  }

}
