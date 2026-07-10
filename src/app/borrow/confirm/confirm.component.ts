import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { DataService } from "src/app/services/data-service.service";

@Component({
  selector: "confirm",
  templateUrl: "./confirm.component.html",
  styleUrls: ["./confirm.component.scss"],
})
export class ConfirmComponent implements OnInit {
  @Input() indexPage: string|undefined;
  @Output() indexPageChange: EventEmitter<string> = new EventEmitter<string>();
  constructor(public dataService: DataService) {}

  ngOnInit() {
    sessionStorage.removeItem("keySearch");
  }
}
