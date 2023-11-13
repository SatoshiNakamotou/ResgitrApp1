import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginAlternativoPage } from './login-alternativo.page';

const routes: Routes = [
  {
    path: '',
    component: LoginAlternativoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginAlternativoPageRoutingModule {}
