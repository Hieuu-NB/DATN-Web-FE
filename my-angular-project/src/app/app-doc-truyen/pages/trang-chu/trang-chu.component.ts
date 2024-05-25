import { Component, OnInit } from '@angular/core';
import { AppService } from '../../store/app.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { KeySearch } from './models/obj.model';
import { DataService } from '../../store/ data.service';

@Component({
  selector: 'app-trang-chu',
  templateUrl: './trang-chu.component.html',
  // template: `<app-trang-truyen [receivedData]="dataFromParent"></app-trang-truyen>`,
  styleUrls: ['./trang-chu.component.css']
})
export class TrangChuComponent implements OnInit {
  data: any;
  // truyen_de_cu: any;
  truyen_de_cu: any[] = [];
  truyen_dich: any[] = [];


  tap_truyen: any;
  trangTruyen: any;
  key = new KeySearch();
  searchForm = new FormGroup({
    text: new FormControl(''),
  });
  constructor( private appservice: AppService,
    private fb: FormBuilder,
    private router:Router,
    private data1: DataService  
    ) { 
   
  }
  ngOnInit(): void {
    this.search_truyen_de_cu();
    console.log("truyen de cu"+ this.truyen_de_cu);
    
    this.search_TRUYEN_DICH();
    console.log("truyen dich"+ this.truyen_dich);

    // this.appservice.getAllList().subscribe(w => {
    //   this.data = w;
    // });
    this.searchForm =  new FormGroup(
      {
        text: new FormControl(''),
      }
    );
    
  }
  search_truyen_de_cu(key?: string){
    this.key.key = this.searchForm.get('text')?.getRawValue();
    // console.log(this.key);
    
    this.appservice.getAllList().subscribe(w => {
      this.data = w;
      
      for (let i = 0; i < this.data.length; i++) {
        if (this.data[i].content === 'DE CU') {
          this.truyen_de_cu.push(this.data[i])
        }
        
      }
      console.log(this.truyen_de_cu);
      
    });
  }

  search_TRUYEN_DICH(key?: string){
    // this.key.key = this.searchForm.get('text')?.getRawValue();
    // console.log(this.key);
    this.appservice.getAllList().subscribe(w => {

      this.data = w;
      
      for (let i = 0; i < this.data.length; i++) {
        if (this.data[i].content === 'TRUYEN DICH') {
          this.truyen_dich.push(this.data[i])
        }
      }

      console.log(this.truyen_dich);
      
    });
  }


  search(key?: string){
    this.key.key = this.searchForm.get('text')?.getRawValue();
    this.appservice.searchTruyen(this.key).subscribe(w => {

      this.truyen_de_cu = w;
      // this
      
      // for (let i = 0; i < this.data.length; i++) {
      //   if (this.data[i].content === 'DE CU') {
      //     this.truyen_de_cu.push(this.data[i])
      //   }
        
      // }

      // console.log(this.truyen_de_cu);
      
    });
  }
  logOut(){
    this.router.navigate(['login']);
  }

  onInputChange(event: any) {
    const inputValue = (event.target as HTMLInputElement).value;
    console.log('Value changed: ', inputValue);
    this.search(inputValue);
    let x = inputValue.toString();
    // this.key.key = x;
    this.appservice.searchTruyen(this.key).subscribe(w => {
      this.data = w;
      console.log(w);
      
    });
  }
  message?:string;
  onRecordClick(record: any) {

    console.log(`Clicked on record with ID ${record.id}`);
    this.router.navigate(['trang-truyen']);

    this.data1.changeMessage(record.id);

    
  }
}
