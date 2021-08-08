import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'lbry-dropdown',
  templateUrl: './lbryDropdown.component.html',
  styleUrls: ['./lbryDropdown.component.scss']
})
export class LbryDropdownComponent implements OnInit {


  @Input() value: any
  @Input() label: string;
  @Input() disabled: boolean;
  @Input() required: boolean;
  @Input() placeholder: string;
  @Input() array: any;
  @Input() idArray: string;
  @Input() valueArray: string;
  @Input() sharedVar: any;
  @Output() sharedVarChange = new EventEmitter();
  open: boolean = false;
  valueChose: string;
  tooltipInp: any;
  tooltipTitleInvalid: string;
  tooltipTitleValid: string;
  array2: any;
  filtro: string;

  constructor() { }

  ngOnInit() {
    if (!this.sharedVar) {
      this.sharedVar = {};
      this.sharedVar[this.valueArray] = null;
      this.valueChose = this.sharedVar[this.valueArray];
    }
    this.array2 = Object.assign([],  this.array);
    this.tooltipInp = false;
    this.tooltipTitleInvalid = 'Il campo ' + this.value + ' non è valido.'
    this.tooltipTitleValid = 'Il campo ' + this.value + ' è valido.'
  }

  clickOnDrop() {
    if (!this.disabled) {
      if (this.array2.length == 0 && !this.filtro) {
        this.array2 = Object.assign([],  this.array);
      }
      this.open = !this.open;
    }
  }

  filter(filtro){
    if (filtro) {
      this.filtro = filtro;
      this.array2 = this.array.filter(val => val[this.valueArray].toUpperCase().includes(filtro.toUpperCase()))
    } else {
      this.array2 = this.array
    }
  }

  change(newValue) {
    console.log('newvalue', newValue)
    // this.sharedVar = newValue;
  }
  
  choose(val) {
    this.sharedVar = Object.assign({}, val);
    this.valueChose = this.sharedVar[this.valueArray];
    this.open = !this.open;
    this.sharedVarChange.emit(this.sharedVar);
  }

  cancel(f: NgForm) {
    f.reset();
    this.sharedVar = {};
    this.sharedVar[this.valueArray] = null;
    this.sharedVarChange.emit(this.sharedVar);
  }

}
