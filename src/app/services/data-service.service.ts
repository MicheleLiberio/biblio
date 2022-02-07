import { Injectable } from '@angular/core';
import { Borrow } from '../class/borrow/borrow';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  search: string;
  borrow: Borrow;

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
}
