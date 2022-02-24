import { Injectable } from '@angular/core';
import { Borrow } from '../class/borrow/borrow';
import { User } from '../class/user/user';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  search: string;
  borrow: Borrow;
  user: User;

  constructor() { }

  setSearch(search:string) {
    this.search = search;
  }

  getSearch(){
    return this.search;
  }

  setBorrow(borrow: Borrow) {
    this.borrow = borrow;
  }

  getBorrow() {
    return this.borrow;
  }

  setUser(user: User) {
    this.user = user;
  }

  getUser() {
    return this.user;
  }
}
