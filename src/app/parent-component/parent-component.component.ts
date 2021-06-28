import { Component, OnInit } from '@angular/core';

import {ajax} from 'rxjs/ajax';

@Component({
  selector: 'app-parent-component',
  templateUrl: './parent-component.component.html',
  styleUrls: ['./parent-component.component.scss']
})
export class ParentComponentComponent implements OnInit {

  array = [{'id': 'dog', 'value': 'dog'}, 
      {'id': 'cat', 'value': 'cat'},  
      {'id': 'hamster', 'value': 'hamster'},
      {'id': 'bird', 'value': 'bird'},
      {'id': 'spider', 'value': 'spider'},
      {'id': 'fish', 'value': 'fish'},
      {'id': 'cow', 'value': 'cow'}]

  country: any;
  constructor() { }

  ngOnInit() {
    this.getCountries();
  }

  getCountries() {
    ajax('https://restcountries.eu/rest/v2/all')
    .subscribe(
      resp => {
         this.country = resp.response;  
      }
    )
  }

  prova(event) {
    console.log(event);
  }

}
