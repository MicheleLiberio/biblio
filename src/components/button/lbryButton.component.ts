import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'lbry-button',
  templateUrl: './lbryButton.component.html',
  styleUrls: ['./lbryButton.component.scss']
})
export class LbryButtonComponent implements OnInit {

  @Input() icon: string;
  @Input() style: string;
  @Input() title: string;
  @Input() disabled: boolean;
  @Output() nbpClick: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
    this.title = this.title.toUpperCase();
    if (!this.style) {
      this.style = 'first'
    }
  }

  click() {
    if (this.disabled === false) {
      this.nbpClick.emit(true);
    }
  } 
}
