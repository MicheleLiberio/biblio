import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { DataService } from "src/app/services/data-service.service";

@Component({
  selector: "error",
  templateUrl: "./error.component.html",
  styleUrls: ["./error.component.scss"],
})
export class ErrorComponent implements OnInit {
  @Input() indexPage: string;
  @Output() indexPageChange: EventEmitter<string> = new EventEmitter<string>();
  constructor(private dataService: DataService) {}

  ngOnInit() {
    sessionStorage.removeItem("keySearch");
  }
}
