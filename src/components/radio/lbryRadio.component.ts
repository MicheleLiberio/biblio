import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'lbry-radio',
  templateUrl: './lbryRadio.component.html',
  styleUrls: ['./lbryRadio.component.scss']
})
export class LbryRadioComponent implements OnInit {

  @Input() label: string;
  @Input() id: any;
  @Input() value: any;
  @Input() name: any;
  @Input() checked: boolean = false;
  @Input() disabled: boolean = false;
  @Output() ngModelChange = new EventEmitter();
  constructor() { }

  ngOnInit() {

  }

  change(newValue) {
    // console.log('newvalue', newValue)
    // this.sharedVar = newValue;
    this.ngModelChange.emit(newValue);
  }

}
