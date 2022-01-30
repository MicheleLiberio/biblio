import { ColInterface } from "./col-interface";
import {
  Component,
  OnInit,
  Output,
  Input,
  EventEmitter,
  ContentChild,
  TemplateRef,
  ElementRef,
} from "@angular/core";

@Component({
  selector: "app-col",
  templateUrl: "./col.component.html",
  styleUrls: ["./col.component.css"],
})
export class ColComponent implements OnInit {
  @Input() id: string;
  @Input() title: string;
  @Input() field: string;
  @Input() sort: boolean = false;
  @Input() img: string;
  @Output() getItem = new EventEmitter<ColInterface>();
  @ContentChild(TemplateRef, { static: true }) templateCol: TemplateRef<any>;

  constructor() {}

  ngOnInit() {
    const colObject: ColInterface = <ColInterface>{
      id: this.id,
      title: this.title,
      field: this.field,
      sort: this.sort,
      typeSort: "asc",
      img: this.img,
      template: this.templateCol,
    };

    this.getItem.emit(colObject);
  }
}
