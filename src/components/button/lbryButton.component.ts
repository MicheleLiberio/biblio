import { Component, EventEmitter, Input, Output, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'lbry-button',
  templateUrl: './lbryButton.component.html',
  styleUrls: ['./lbryButton.component.scss']
})
export class LbryButtonComponent implements OnInit {

  @Input() icon: string;
  @Input() style: string;
  @Input() title: string;
  @Input() id: string;
  @Input() disabled: boolean;
  @Input() loading: boolean;
  @Output() nbpClick: EventEmitter<boolean> = new EventEmitter<boolean>();
  isLoading: boolean = false;
  width: number;
  constructor() { }

  ngOnInit() {
    this.title = this.title.toUpperCase();
    if (!this.style && !this.disabled) {
      this.style = 'first'
    }
    if(this.id == null) {
      this.id = "btn" + this.id ? ("_" + this.id) : "";
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if(this.loading) {
      this.disabled = true;
      document.getElementById(this.id).style.width = document.getElementById(this.id).offsetWidth + 'px';
    } else {
      this.disabled = false;
    }
  }

  click() {
    if (!this.disabled) {
      this.nbpClick.emit(true);
    }
  } 
}
