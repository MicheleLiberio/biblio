import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/class/user/user';
import { ApiService } from 'src/app/services/api-service.service';
import { DataService } from 'src/app/services/data-service.service';
import { styleButton } from 'src/components/button/LbryButton.enum';
import { patternInput } from 'src/components/input/lbryInput.enum';
import { sizeModal } from 'src/components/modal/lbryModal.enum';

@Component({
  selector: 'data-user',
  templateUrl: './data-user.component.html',
  styleUrls: ['./data-user.component.scss']
})
export class DataUserComponent implements OnInit {
  @ViewChild("userForm", { static: true }) userForm: NgForm;
  @ViewChild("searchForm", { static: true }) searchForm: NgForm;
  sizeModal = sizeModal;
  styleButton = styleButton;
  user: User;
  patternInput = patternInput;
  userRegistration: boolean;
  isUserRegistration: boolean;
  nameSearch: string;
  surnameSearch: string;
  openModal: boolean;
  usersFound: any;
  userFound: any;
  isUserFound: boolean;

  

  constructor(
    private dataService: DataService,
    private apiService: ApiService,
    private cdRef : ChangeDetectorRef) { }

  ngOnInit() {
    this.user = {
      name: null,
      surname: null,
      dateBirth: null,
      address: null,
      town: null,
      zip: null,
      telephone: null,
      email: null,
    };
  }

  isRegistred() {
    this.isUserRegistration = true;
  }

  search() {
    if (this.nameSearch || this.surnameSearch) {
      this.apiService.getUsers(this.nameSearch, this.surnameSearch).subscribe({
        next: (user) => {
          console.log(user);
          this.usersFound = user
          this.openModal = true;
          this.cdRef.detectChanges();
        },
        error: (error) => {
          console.error("There was an error!", error);
        },
      });
    }
  }

  submitForm(userForm) {
    console.log("prova");
  }

  cancel() {
    this.openModal = false;
  }

  conferm() {
    this.openModal = false;
    this.user = this.userFound;
    this.dataService.setUser(this.user);
    this.isUserFound = true;
  }

  setUserFound(data: any) {
    this.userFound = data;
  }

  saveNewUser(){
      this.apiService.setUser(this.user).subscribe({
      next: (user) => {
        console.log(user);
      },
      error: (error) => {
        console.error("There was an error!", error);
      },
    });
  }

  goForward() {
    /*this.apiService.setUser(this.user).subscribe({
      next: (user) => {
        console.log(user);
      },
      error: (error) => {
        console.error("There was an error!", error);
      },
    });*/
  }

}
