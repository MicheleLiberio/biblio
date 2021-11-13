import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lbry-radio',
  templateUrl: './lbryRadio.component.html',
  styleUrls: ['./lbryRadio.component.css']
})
export class LbryRadioComponent implements OnInit {

  @Input() label: string;
  @Input() id: any;
  @Input() value: any;
  @Input() checked: boolean = false;
  @Input() disabled: boolean = false;
  constructor() { }

  ngOnInit() {

  }

}
