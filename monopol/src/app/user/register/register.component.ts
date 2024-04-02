import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { EMAIL_DOMAINS } from 'src/app/constants';
import { emailValidator } from 'src/app/shared/utils/emailValidator';
import { matchPasswordsValidator } from 'src/app/shared/utils/match-passwords-validator';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  allFieldsError: boolean = false;

  // emailValidator(EMAIL_DOMAINS)

  form = this.fb.group({
    email: ['', [Validators.required, emailValidator(EMAIL_DOMAINS)]],
    passGroup: this.fb.group(
      {
        password: ['', [Validators.required, Validators.minLength(4)]],
        rePassword: ['', [Validators.required]],
      },
      { validators: [matchPasswordsValidator('password', 'rePassword')] }
    ),
  });

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {}

  register(): void {
    if (this.form.invalid) {
      console.log(this.form);
      this.allFieldsError = true;
      setTimeout(() => {
        this.allFieldsError = false;
      }, 2000);
      return;
    }

    const { email, passGroup: { password, rePassword } = {} } = this.form.value;

    this.userService.regisetr(email!, password!).subscribe(() => {
      this.router.navigate(['/home']);
    });

    console.log(this.form.value);
  }
}
