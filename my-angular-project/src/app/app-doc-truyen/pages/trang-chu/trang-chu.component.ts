import { Component, OnInit } from '@angular/core';
import { AppService } from '../../store/app.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { KeySearch } from './models/keySearch.model';
import { DataService } from '../../store/ data.service';

@Component({
  selector: 'app-trang-chu',
  templateUrl: './trang-chu.component.html',
  // template: `<app-trang-truyen [receivedData]="dataFromParent"></app-trang-truyen>`,
  styleUrls: ['./trang-chu.component.css']
})
export class TrangChuComponent implements OnInit {
  data: any;
  tap_truyen: any;
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

    this.appservice.getAllList().subscribe(w => {
      this.data = w;
    });
    this.searchForm =  new FormGroup(
      {
        text: new FormControl(''),
      }
    );
    
  }
  search(key?: string){
    this.key.key = this.searchForm.get('text')?.getRawValue();
    console.log(this.key);
    
    this.appservice.searchTruyen(this.key).subscribe(w => {
      this.data = w;
      console.log(w);
      
    });
  }
  onInputChange(event: any) {
    const inputValue = (event.target as HTMLInputElement).value;
    console.log('Value changed: ', inputValue);
    this.search(inputValue);
    let x = inputValue.toString();
    this.key.key = x;
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
