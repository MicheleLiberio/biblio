import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lbry-tooltip',
  templateUrl: './LbryTooltip.component.html',
  styleUrls: ['./LbryTooltip.component.scss']
})
export class LbryTooltipComponent implements OnInit {

  @Input() message: string;
  @Input() icon: string;
  @Input() messageTool: string;

  constructor() { }

  ngOnInit() {
  }

}
