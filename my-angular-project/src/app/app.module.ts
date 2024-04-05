import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './app-doc-truyen/pages/login/login.component';
import { LoginModule } from './app-doc-truyen/pages/login/login.module';
import { HttpClientModule } from '@angular/common/http';
import { TrangChuComponent } from './app-doc-truyen/pages/trang-chu/trang-chu.component';
import { DataService } from './app-doc-truyen/store/ data.service';

@NgModule({
  declarations: [
    AppComponent,
    TrangChuComponent
    // AppDocTruyennComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    LoginModule,
    HttpClientModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
