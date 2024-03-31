import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { EMAIL_DOMAINS } from 'src/app/constants';
import { emailValidator } from 'src/app/shared/utils/emailValidator';
import { matchPasswordsValidator } from 'src/app/shared/utils/match-passwords-validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  allFieldsError: boolean = false;

  form = this.fb.group({
    email: ['', [Validators.required, emailValidator(EMAIL_DOMAINS)]],
    passGroup: this.fb.group(
      {
        password: ['', [Validators.required]],
        rePassword: ['', [Validators.required]],
      },
      { validators: [matchPasswordsValidator('password', 'rePassword')] }
    ),
  });

  constructor(private fb: FormBuilder) {}

  register(): void {
    if (this.form.invalid) {
      this.allFieldsError = true;
      setTimeout(() => {
        this.allFieldsError = false;
      }, 2000);
      return;
    }
    console.log(this.form.value);
  }
}
