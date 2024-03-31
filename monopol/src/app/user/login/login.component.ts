import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { EMAIL_DOMAINS } from 'src/app/constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  domains = EMAIL_DOMAINS;
  errormsg = false;
  constructor(private userService: UserService, private router: Router) {}

  login(form: NgForm) {
    console.log(form.value);
    if (form.invalid) {
      this.errormsg = true;
      return;
    }
    this.userService.login();
    this.router.navigate(['/home']);
  }
}
