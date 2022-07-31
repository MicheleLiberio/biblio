import { patternInput } from './../../components/input/lbryInput.enum';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { styleButton } from './../../components/button/LbryButton.enum';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  styleButton = styleButton;
  name: string;
  surname: string;
  patternEmail = patternInput.MAIL;
  dataPrestito: any;
  modelNome: String;

  constructor() { }

  ngOnInit() {
  }

  onFormSubmit() {
    console.log(this.name + ' ' + this.surname);
  }

}
