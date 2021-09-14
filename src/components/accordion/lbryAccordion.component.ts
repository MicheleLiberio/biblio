import { Component, Input, OnInit, ContentChild, TemplateRef } from '@angular/core';

@Component({
  selector: 'lbry-accordion',
  templateUrl: './LbryAccordion.component.html',
  styleUrls: ['./LbryAccordion.component.scss']
})
export class LbryAccordionComponent implements OnInit {

  @Input() isCollapsed: boolean;
  @Input() title: string;
  @ContentChild(TemplateRef, {static: true}) template: TemplateRef<any>;


  constructor() { }

  ngOnInit() {
  }

  collapse() {
    this.isCollapsed = !this.isCollapsed;
  }

}
