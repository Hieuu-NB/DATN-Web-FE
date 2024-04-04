import { Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { LoginComponent } from "./login.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

const routes: Routes = [
    {
      path: '', component: LoginComponent,
    }
  ];
  
  @NgModule({
    declarations: [
        LoginComponent,
    ],
    imports: [
      FormsModule,
    ReactiveFormsModule,
    ],
    //providers: [OverlayService]
  })
  export class LoginModule { }
  