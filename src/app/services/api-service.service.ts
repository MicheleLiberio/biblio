import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { User } from "../class/user/user";
import { Lend } from "../class/lend/lend";

@Injectable({
  providedIn: "root",
})
export class ApiService {
  private url = "http://localhost:8083/api";

  constructor(private httpClient: HttpClient) {}

  getBooks(searchKey: String) {
    return this.httpClient.get(
      `${this.url}/books?searchKey=${searchKey ? searchKey : ""}`
    );
  }

  getUsers(nameSearch: string, surnameSearch: string) {
    return this.httpClient.get(
      `${this.url}/readers?name=${nameSearch ? nameSearch : ""}&surname=${
        surnameSearch ? surnameSearch : ""
      }`
    );
  }

  setUser(user: User) {
    console.log("user: ", user);
    return this.httpClient.post(`${this.url}/readers`, user);
  }

  setLend(lend: Lend) {
    console.log("lend: ", lend);
    return this.httpClient.post(`${this.url}'/lends`, lend);
  }
}
