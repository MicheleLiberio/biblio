import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

@Component({
  selector: 'lbry-calendar',
  templateUrl: './lbryCalendar.component.html',
  styleUrls: ['./lbryCalendar.component.scss'],
  viewProviders: [ { provide: ControlContainer, useExisting: NgForm } ]
})
export class LbryCalendarComponent implements OnInit {

  @Input() id: any;
  @Input() value: any
  @Input() label: string;
  @Input() placeholder: string;
  @Input() type: any
  @Input() disabled: boolean;
  @Input() blModel: string;
  @Input() required: boolean;
  @Input() pattern: string;
  @Output() blModelChange = new EventEmitter();
  tooltipInp: any;
  tooltipTitleInvalid: string;
  tooltipTitleValid: string;

  constructor() { }

  ngOnInit() {
  }

  change(newValue) {
    this.blModelChange.emit(newValue);
  }

  cancel(f: NgForm) {
    this.blModel = "";
    this.change(this.blModel)
  }

}
