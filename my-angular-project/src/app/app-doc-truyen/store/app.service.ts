import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { ListTruyen } from "../models/truyen.model";
import { Account } from "../pages/login/models/account.model";
import { KeySearch } from "../pages/trang-chu/models/keySearch.model";

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
    getAllList() {
      return this.http.get<any>(
        'http://localhost:8090/truyen-tranh-onl/get-all',
      );
    }
    searchTruyen(key: KeySearch){
      return this.http.post<any>(
        'http://localhost:8090/truyen-tranh-onl/search',
        key
      );
    }
    showTrangTruyen(tapTruyen: any) {
      return this.http.get<any>(
        `http://localhost:8090/truyen-tranh-onl/get-by-id?tapTruyen=${tapTruyen}`
      );
    }
    
}