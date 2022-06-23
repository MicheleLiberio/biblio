import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

private url = 'http://localhost:8082/api';


constructor(private httpClient: HttpClient) { }
  
getBooks(searchKey: String) {
  return this.httpClient.get(this.url + '/books?searchKey=' + (searchKey ? searchKey : ''));
}
}
