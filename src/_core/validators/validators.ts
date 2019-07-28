import { ValidatorFn, FormGroup } from "@angular/forms";

export function checkConfirmedPassword(): ValidatorFn {
  return (control: FormGroup): { [key: string]: any } | null => {
    return control.value.password === control.value.password2 ||
      !control.value.password ||
      !control.value.password2
      ? null
      : { password2: "not match" };
  };
}
