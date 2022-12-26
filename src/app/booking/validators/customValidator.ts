import { AbstractControl } from "@angular/forms";

export class CustomValidator {

  static validateEmail(control: AbstractControl) {
    const value = control.value as string;
    if (value && value.includes('test')) {
      return {
        invalidEmail: true
      }
    }
    return null;
  }
}