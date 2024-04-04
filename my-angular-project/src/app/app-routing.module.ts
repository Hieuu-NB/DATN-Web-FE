import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { TrangChuComponent } from './app-doc-truyen/pages/trang-chu/trang-chu.component';
import { LoginComponent } from './app-doc-truyen/pages/login/login.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  // { path: 'trang-chu', component: TrangChuComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'trang-chu',
    loadChildren: () =>
      import('./app-doc-truyen/pages/trang-chu/trang-chu.module').then(
        (m) => m.TrangChuModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
