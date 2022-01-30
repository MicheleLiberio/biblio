import { Component, OnInit, ContentChild, TemplateRef, Input, EventEmitter, Output, SimpleChanges } from '@angular/core';
import { styleButton } from './../../components/button/LbryButton.enum';
import * as _ from 'lodash'; 

@Component({
  selector: 'lbry-filter',
  templateUrl: './lbryFilter.component.html',
  styleUrls: ['./lbryFilter.component.scss']
})
export class LbryFilterComponent implements OnInit {

  @Input() arrayFilter: any;
  @Output() getArrayFilters = new EventEmitter<any>();
  dataFilter: any;
  styleButton = styleButton;
  ngModel = []
  arrayFilterNew: any;
  @ContentChild(TemplateRef, {static: true}) template: TemplateRef<any>;

  constructor() { }

  ngOnInit() {
    this.dataFilter = [];
    this.arrayFilterNew = this.arrayFilter;
    this.getArrayFilters.emit(this.arrayFilterNew);
  }

  getItem(element: any) {
    element.ngModel = '';
    if (element.type === 'dropdown') {
      element.array = [];
      // let field = element.field;
      this.arrayFilterNew.forEach(el => {
        let value = {'id': el[element.field]};
        value.id = el[element.field];
        value[element.field] = el[element.field];
				if(!element.array.some(val => val.id === value.id))        
				{ 
          element.array.push(value)}
				}
			)
    }
    this.dataFilter.push(element);
  }

  abilita() {
    var check = this.dataFilter.some(element => 
      { 
        if (element.type === 'input') {
          return Boolean(element.ngModel)
          } else if (element.type === 'dropdown') {
            return Boolean(element.ngModel)
          }
      }
    );
    return !check;
  }

  ricerca() {
    this.arrayFilterNew = this.arrayFilter.filter(element => this.filter(element))
    this.getArrayFilters.emit(this.arrayFilterNew)     
  }

  filter(element) {
  let filt = true;
  this.dataFilter.forEach(model => {
    if (Boolean(model.ngModel)) {
     filt = filt && element[model.field].toUpperCase().includes(model.ngModel.toUpperCase());
      }
    }
  )
  return filt;
  }

  dropdownFilter(event) {
    let element = this.dataFilter.find(el => _.has(event, el.field))
    element.ngModel = event.region;
  }

  changeNgModel(event, object) {
    switch (object) {
      case 'input':
        if (!event) {
          this.ricerca();
        }
        break;
      case 'dropdown': 
          let element = this.dataFilter.find(el => _.has(event, el.field))
          element.ngModel = event.region;
        if (!element.ngModel) {
          this.ricerca();
        }
        break;
    }
  }

}
