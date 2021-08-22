import { styleButton } from './../../components/button/LbryButton.enum';
import { Component, OnInit, ChangeDetectorRef  } from '@angular/core';

import {ajax} from 'rxjs/ajax';

@Component({
  selector: 'app-parent-component',
  templateUrl: './parent-component.component.html',
  styleUrls: ['./parent-component.component.scss']
})
export class ParentComponentComponent implements OnInit {

  modelNome: string;
  styleButton = styleButton;

  array = [{'id': 'dog', 'value': 'dog'}, 
      {'id': 'cat', 'value': 'cat'},  
      {'id': 'hamster', 'value': 'hamster'},
      {'id': 'bird', 'value': 'bird'},
      {'id': 'spider', 'value': 'spider'},
      {'id': 'fish', 'value': 'fish'},
      {'id': 'cow', 'value': 'cow'}]
  
  array2 = [{"autore": "Alessandro Manzoni" , "titolo": "I Promessi Sposi", "anno": "2017", 
  "editore": "Mondadori", "status": "disponibile", "catalogazione": "A12E3"},
  {"autore": "Alessandro Manzoni" , "titolo": "I Promessi Sposi", "anno": "2012", 
  "editore": "Mondadori", "status": "solo lettura", "catalogazione": "A12E4"},
  {"autore": "Alessandro Manzoni" , "titolo": "I Promessi Sposi", "anno": "2013", 
  "editore": "Mondadori", "status": "non disponbile", "catalogazione": "A12E3"},
  {"autore": "Alessandro Manzoni" , "titolo": "I Promessi Sposi", "anno": "2014", 
  "editore": "Mondadori", "status": "disponibile", "catalogazione": "A12E1"}
  ]

  country: any;
  arrayFilterNew: any;
  flag: any;
  comp: string;
  
  constructor(
    private cdref: ChangeDetectorRef
    ) { }

  ngOnInit() {
    this.getCountries();
    this.getFlag();
  }

  ngAfterContentChecked() {
    this.cdref.detectChanges();
  }

  ngOnChanges() {
    this.cdref.detectChanges();
  }

  getCountries() {
    ajax('https://restcountries.eu/rest/v2/all')
    .subscribe(
      resp => {
         this.country = resp.response;
        //  this.country = resp.response.filter(element => element.population > 100000000)
        //  this.country.forEach(element => element.population = element.population.toLocaleString());
        //  this.country.forEach(element => 
        //   {
        //     if(element.area){element.area = element.area.toLocaleString()} 
        //   })
         this.country.forEach(element => element.currencies = element.currencies.map(e => e.name));
         this.country.forEach(element => element.languages = element.languages.map(e => e.name));
      }
    )
  }

  getFlag() {
    ajax('https://restcountries.eu/data/ala.svg')
    .subscribe(
      resp => {
        this.flag = resp;  
     }
    )
  }

  prova(event) {
    // this.country = this.country.filter(element => element.region === this.modelNome);
    console.log(event);
  }

  getStatus(data) {
    console.log(data);
  }

  getArrayFilters(event){
    this.arrayFilterNew = event;
  }

  selectComp(comp: string) {
    this.comp = comp;
  }

}
