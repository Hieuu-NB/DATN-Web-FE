import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { ListTruyen } from "../models/truyen.model";
import { Account } from "../pages/login/models/account.model";

@Injectable({
    providedIn: 'any',
  })


export class AppService {
    constructor(private http: HttpClient) {}
  
    login(account: Account){
      return this.http.post<any>(
        'http://localhost:8090/user/login',
        account
      );
    }

    getAllList(listTruyen: ListTruyen) {
      return this.http.post<any>(
        'API_URL/card-issuance-management-service/cards',
        listTruyen
      );
    }
}