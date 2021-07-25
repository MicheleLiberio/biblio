import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'lbry-input',
  templateUrl: './lbryInput.component.html',
  styleUrls: ['./lbryInput.component.scss']
})
export class lbryInputComponent implements OnInit {

  constructor() { }

  @Input() id: any;
  @Input() value: any
  @Input() label: string;
  @Input() placeholder: string;
  @Input() pattern: string
  @Input() disabled: boolean;
  @Input() sharedVar: string;
  @Input() required: boolean;
  @Output() sharedVarChange = new EventEmitter();
  tooltipInp: any;
  tooltipTitleInvalid: string;
  tooltipTitleValid: string;

  ngOnInit() {
    this.tooltipInp = false;
    this.tooltipTitleInvalid = 'Il campo ' + this.value + ' non è valido.'
    this.tooltipTitleValid = 'Il campo ' + this.value + ' è valido.'
    setTimeout(()=> this.tooltipInp = true, 500)
  }

  change(newValue) {
    console.log('newvalue', newValue)
    // this.sharedVar = newValue;
    this.sharedVarChange.emit(newValue);
  }

  cancel(f: NgForm) {
    f.reset();
  }
}
