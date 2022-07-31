import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../class/user/user';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

private url = 'http://localhost:8082/api';


constructor(private httpClient: HttpClient) { }
  
getBooks(searchKey: String) {
  return this.httpClient.get(this.url + '/books?searchKey=' + (searchKey ? searchKey : ''));
}

getUsers(nameSearch: string, surnameSearch: string) {
  return this.httpClient.get(this.url + '/users?name=' + (nameSearch ? nameSearch : '') +'&surname='+ (surnameSearch ? surnameSearch : '') );
}

setUser(user: User) {
  console.log("user: ", user);
  return this.httpClient.post(this.url + '/users', user)
  // throw new Error("Method not implemented.");
}

}
