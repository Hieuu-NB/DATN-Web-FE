import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { TrangTruyenComponent } from "./trang-truyen.component";

const routes: Routes = [
    {
      path: '', component: TrangTruyenComponent,
    }
  ];
  
  @NgModule({
    declarations: [
        TrangTruyenComponent
    ],
    imports: [
      CommonModule,
      // BrowserModule, 
      RouterModule.forChild(routes)
    ],
    //providers: [OverlayService]
  })
  export class TrangTruyenModule { }
  