import { Component, OnInit, Output, Input, EventEmitter, ContentChild, TemplateRef, ElementRef } from '@angular/core';

@Component({
  selector: 'app-col',
  templateUrl: './col.component.html',
  styleUrls: ['./col.component.css']
})
export class ColComponent implements OnInit {
  
  @Input() id: string
  @Input() title: string
  @Input() field: string
  @Input() sort: boolean = false;
  @Input() img: string;
  // @Input() template: boolean = false;
  @Output() getItem = new EventEmitter<any>();
  @ContentChild(TemplateRef, {static: true}) templateeeee: TemplateRef<any>;

  constructor() { }

  ngOnInit() {
    this.getItem.emit(
      {'id': this.id,
      'title': this.title,
      'field': this.field,
      'sort': this.sort,
      'typeSort': 'asc',
      'img': this.img,
      'template': this.templateeeee
      }
    );
  }

  

}
