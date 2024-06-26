import { RouterModule, Routes } from "@angular/router";
import { TrangChuComponent } from "./trang-chu.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { TrangTruyenComponent } from "../trang-truyen/trang-truyen.component";

const routes: Routes = [
    {
      path: '', component: TrangChuComponent,
    }
  ];
  
  @NgModule({
    declarations: [
        // TrangChuComponent
    ],
    imports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      RouterModule.forChild(routes)
    ],
  })
  export class TrangChuModule { }
  