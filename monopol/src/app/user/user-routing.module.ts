import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LoggedActivate } from '../guards/logged.activate';

const routes: Routes = [
  { path: 'login', component: LoginComponent, canActivate: [LoggedActivate] },
  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [LoggedActivate],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
