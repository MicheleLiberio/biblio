import { styleButton } from './../../components/button/LbryButton.enum';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {

  styleButton = styleButton;
  page: string;
  model = {
    nome: '',
    cognome: '',
    libro: '',
    casaEditrice: '',
    annoPubblicazione: ''
  }

  constructor() { }

  ngOnInit() {
  }

  selectPage(page: string) {
    this.page = page;
  }

  control() {
    return Boolean((this.model.nome && this.model.cognome) || this.model.libro || this.model.casaEditrice ||
    this.model.annoPubblicazione)
  }

}
