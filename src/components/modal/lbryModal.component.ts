import { styleButton } from './../../components/button/LbryButton.enum';
import { Component, Input, OnInit, Output, EventEmitter, SimpleChanges } from '@angular/core';

@Component({
  selector: 'lbry-modal',
  templateUrl: './lbryModal.component.html',
  styleUrls: ['./lbryModal.component.scss']
})
export class LbryModalComponent implements OnInit {

  @Input() idModal: string;
  @Input() openModal: boolean;
  @Input() title: string;
  @Input() size: string;
  @Output() openModalStatus = new EventEmitter<boolean>();
  styleButton =  styleButton;
  constructor() { }

  ngOnInit() {
    if(this.openModal) {
      document.getElementById(this.idModal).style.display = "block";
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
    if(this.openModal) {
      document.getElementById(this.idModal).style.display = "block";
    }
  }

  modal = document.getElementById("myModal");

  // Get the button that opens the modal
   btn = document.getElementById("myBtn");
  
  // Get the <span> element that closes the modal
   span = document.getElementsByClassName("close")[0];
  
  // When the user clicks the button, open the modal 
  onclickModal(){
    document.getElementById(this.idModal).style.display = "block";
  }
  
  // When the user clicks on <span> (x), close the modal
  onclick(){
    document.getElementById(this.idModal).style.display = "none";
    this.openModal = false;
    this.openModalStatus.emit(this.openModal);
  }
  
}
