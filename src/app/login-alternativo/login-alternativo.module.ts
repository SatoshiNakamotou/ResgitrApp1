import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { LoginAlternativoPageRoutingModule } from './login-alternativo-routing.module';
import { LoginAlternativoPage } from './login-alternativo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginAlternativoPageRoutingModule
  ],
  declarations: [LoginAlternativoPage],
  exports: [LoginAlternativoPage]  // Asegúrate de agregar esta línea
})
export class LoginAlternativoPageModule {}
