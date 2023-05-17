import {
  Component,
  EventEmitter,
  Input,
  Output,
  OnInit,
  SimpleChanges,
} from "@angular/core";
import { Observable } from "rxjs/internal/Observable";
import { LoadingService } from "src/app/services/loading.service";

@Component({
  selector: "lbry-button",
  templateUrl: "./lbryButton.component.html",
  styleUrls: ["./lbryButton.component.scss"],
})
export class LbryButtonComponent implements OnInit {
  @Input() icon: string;
  @Input() style: string;
  @Input() title: string;
  @Input() id: string;
  @Input() disabled: boolean;
  @Output() nbpClick: EventEmitter<boolean> = new EventEmitter<boolean>();
  isLoading$: Observable<boolean>;
  idLoading: string;
  width: number;
  constructor(private loadingService: LoadingService) {
    (this.isLoading$ = this.loadingService.loading$),
      (this.idLoading = this.loadingService.idLoading);
  }

  ngOnInit() {
    this.title = this.title.toUpperCase();
    if (!this.style) {
      this.style = "first";
    }
    if (this.id != null) {
      this.id = "btn" + (this.id ? "_" + this.id : "");
    }
  }

  ngAfterViewInit() {
    if (this.id && document.getElementById(this.id).offsetWidth) {
      document.getElementById(this.id).style.width =
        document.getElementById(this.id).offsetWidth + "px";
    }
  }

  click() {
    if (!this.disabled) {
      this.loadingService.setIdLoading(this.id);
      this.idLoading = this.id;
      this.nbpClick.emit(true);
    }
  }
}
