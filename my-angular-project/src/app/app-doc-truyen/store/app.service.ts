import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { ListTruyen } from "../models/truyen.model";
import { Account } from "../pages/login/models/account.model";
import { Comments, KeySearch } from "../pages/trang-chu/models/obj.model";

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

    commentTruyen(cmt: Comments) {
      return this.http.post<Comments>(
        'http://localhost:8090/truyen-tranh-onl/comment-by-truyen',
        cmt
      );
    }
    

    // accessInput(accessInput: AccessInput) {
    //   return this.http.post<AccessInput>(API_URL + `/w4-inquiry-service/instalments-in-period/get-instalments`, accessInput);
    //   // return ''
    // }
}