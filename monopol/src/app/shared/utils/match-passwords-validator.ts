import { ValidatorFn } from '@angular/forms';

export function matchPasswordsValidator(
  password: string,
  rePassword: string
): ValidatorFn {
  return (control) => {
    const passwordControl = control.get(password);
    const rePasswordControl = control.get(rePassword);
    const areMatching = passwordControl?.value === rePasswordControl?.value;
    return areMatching ? null : { matchPasswordsValidator: true };
  };
}
