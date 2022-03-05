import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  modelNome: string;

  constructor() { }

  ngOnInit() {
  }

  prova(event: any) {
    console.log(event);
  }

}
