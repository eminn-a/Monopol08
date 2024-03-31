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
  allFieldsError: boolean = false;
  domains = EMAIL_DOMAINS;

  constructor(private userService: UserService, private router: Router) {}

  login(form: NgForm) {
    if (form.invalid) {
      this.allFieldsError = true;
      setTimeout(() => {
        this.allFieldsError = false;
      }, 2000);
      return;
    }
    console.log(form.value);
    this.userService.login();
    this.router.navigate(['/home']);
  }
}
