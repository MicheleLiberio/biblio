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

  constructor() { }

  ngOnInit() {
  }

  selectPage(page: string) {
    this.page = page;
  }

}
