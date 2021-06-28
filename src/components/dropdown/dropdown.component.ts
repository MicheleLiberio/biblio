import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {


  @Input() value: any
  @Input() label: string;
  @Input() disabled: boolean;
  @Input() required: boolean;
  @Input() placeholder: string;
  @Input() array: any;
  @Input() idArray: string;
  @Input() valueArray: string;
  open: boolean = false;
  sharedVar: any;
  valueChose: string;
  tooltipInp: any;
  tooltipTitleInvalid: string;
  tooltipTitleValid: string;
  array2: any;
  filtro: string;

  constructor() { }

  ngOnInit() {
    this.sharedVar = 'start'
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
    this.filtro = filtro;
    this.array2 = this.array.filter(val => val[this.valueArray].toUpperCase().includes(filtro.toUpperCase()))
  }

  change(newValue) {
    console.log('newvalue', newValue)
    // this.sharedVar = newValue;
  }
  
  choose(val) {
    this.sharedVar = Object.assign({}, val);
    this.valueChose = this.sharedVar[this.valueArray];
    this.open = !this.open;
  }

}
