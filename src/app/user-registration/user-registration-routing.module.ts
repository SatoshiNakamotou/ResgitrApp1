import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { UserRegistrationPage } from './user-registration.page';

const routes: Routes = [
  {
    path: '',
    component: UserRegistrationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes),FormsModule],
  exports: [RouterModule],
})
export class UserRegistrationPageRoutingModule {}
