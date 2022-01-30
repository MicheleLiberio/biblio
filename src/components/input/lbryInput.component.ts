import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'lbry-input',
  templateUrl: './lbryInput.component.html',
  styleUrls: ['./lbryInput.component.scss']
})
export class LbryInputComponent implements OnInit {

  constructor() { }

  @Input() id: any;
  @Input() value: any
  @Input() label: string;
  @Input() placeholder: string;
  @Input() type: any
  @Input() disabled: boolean;
  @Input() blModel: string;
  @Input() required: boolean;
  @Input() pattern: string;
  @Output() blModelChange = new EventEmitter();
  tooltipInp: any;
  tooltipTitleInvalid: string;
  tooltipTitleValid: string;

  ngOnInit() {
    this.tooltipInp = false;
    this.tooltipTitleInvalid = 'Il campo ' + this.id + ' non è valido.'
    this.tooltipTitleValid = 'Il campo ' + this.id + ' è valido.'
    setTimeout(()=> this.tooltipInp = true, 500)
  }

  change(newValue) {
    // console.log('newvalue', newValue)
    // this.sharedVar = newValue;
    this.blModelChange.emit(newValue);
  }

  cancel(f: NgForm) {
    this.blModel = "";
    this.change(this.blModel)
  }
}
