import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lbry-section',
  templateUrl: './lbrySection.component.html',
  styleUrls: ['./lbrySection.component.scss']
})
export class LbrySectionComponent implements OnInit {

  @Input() title;

  constructor() { }

  ngOnInit() {
  }

}
