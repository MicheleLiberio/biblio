import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lbry-tooltip',
  templateUrl: './lbryTooltip.component.html',
  styleUrls: ['./lbryTooltip.component.scss']
})
export class LbryTooltipComponent implements OnInit {

  @Input() message: string;
  @Input() icon: string;
  @Input() messageTool: string;

  constructor() { }

  ngOnInit() {
  }

}
