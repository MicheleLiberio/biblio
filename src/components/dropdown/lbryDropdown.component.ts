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
  @Input() blModel: any;
  @Output() blModelChange = new EventEmitter();
  open: boolean = false;
  valueChose: string;
  tooltipInp: any;
  tooltipTitleInvalid: string;
  tooltipTitleValid: string;
  array2: any;
  filtro: string;

  constructor() { }

  ngOnInit() {
    if (!this.blModel) {
      this.blModel = {};
      this.blModel[this.valueArray] = null;
      this.valueChose = this.blModel[this.valueArray];
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
  
  choose(val) {
    this.blModel = Object.assign({}, val);
    this.valueChose = this.blModel[this.valueArray];
    this.open = !this.open;
    this.blModelChange.emit(this.blModel);
  }

  cancel(f: NgForm) {
    f.reset();
    this.blModel = {};
    this.blModel[this.valueArray] = null;
    this.blModelChange.emit(this.blModel);
  }

}
