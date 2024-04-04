import { RouterModule, Routes } from "@angular/router";
import { TrangChuComponent } from "./trang-chu.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";

const routes: Routes = [
    {
      path: '', component: TrangChuComponent,
    }
  ];
  
  @NgModule({
    declarations: [
        TrangChuComponent
    ],
    imports: [
      CommonModule,
      // BrowserModule, 
      RouterModule.forChild(routes)
    ],
    //providers: [OverlayService]
  })
  export class TrangChuModule { }
  