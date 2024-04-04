import { Component, OnInit } from '@angular/core';
import { AppService } from '../../store/app.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Account } from './models/account.model';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  account = new Account();
  data: any;
  loginForm = new FormGroup({
    username: new FormControl(''),
      password: new FormControl(''),
  });
  constructor(
    private appservice: AppService,
    private fb: FormBuilder,
    private router:Router
  ) { }
  // initForm() {
  //   this.loginForm = this.fb.group({
  //     username: new FormControl(''),
  //     password: new FormControl('')
  //   })
  // }
  ngOnInit(): void {
    this.loginForm =  new FormGroup(
      {
        username: new FormControl(''),
        password: new FormControl('')
      }
    );
  }
  login(){
    this.account.taiKhoan = this.loginForm.get('username')?.getRawValue();
    this.account.matKhau = this.loginForm.get('password')?.getRawValue();
    this.appservice.login(this.account).subscribe(w => {
      this.data = w;
      if (this.data.code != 200) {
        console.log("Sai tài khoản hoặc mật khẩu");
      }
      else{
        console.log("ok");
        this.router.navigate(['trang-chu']);
      }
    });
    
  }
}
