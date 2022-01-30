import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'lbry-input-search',
  templateUrl: './lbryInputSearch.component.html',
  styleUrls: ['./lbryInputSearch.component.scss']
})
export class LbryInputSearchComponent implements OnInit {

  constructor() { }

  @Input() id: any;
  @Input() value: any
  @Input() label: string;
  @Input() placeholder: string;
  @Input() type: any
  @Input() disabled: boolean;
  @Input() blModel: string;
  @Output() blModelChange = new EventEmitter();

  ngOnInit() {
  }

  change(newValue) {
    this.blModelChange.emit(newValue);
  }

  cancel(f: NgForm) {
    this.blModel = "";
    this.change(this.blModel)
  }

}
