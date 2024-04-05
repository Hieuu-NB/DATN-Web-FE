import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../store/ data.service';
import { AppService } from '../../store/app.service';

@Component({
  selector: 'app-trang-truyen',
  templateUrl: './trang-truyen.component.html',
  styleUrls: ['./trang-truyen.component.css']
})
export class TrangTruyenComponent implements OnInit {
  message?: string;
  trangTruyen: any;

  constructor(private router:Router,
    private data: DataService
    ,private appservice: AppService) { }

    ngOnInit() {
      this.data.currentMessage.subscribe(message => this.message = message);
      console.log("data : " + this.message);

      this.appservice.showTrangTruyen(this.message).subscribe(w => {
      this.trangTruyen = w;
      console.log(w);
    });
    }


  logOut(){
    this.router.navigate(['login']);
  }




  
}
