
import { AbstractControl, FormControl, ValidationErrors, ValidatorFn } from "@angular/forms";
import { FormGroup } from '@angular/forms';

export class Customvalidator {
    
    static patternValidator(regex: RegExp, error: ValidationErrors): ValidatorFn {
        return (control: AbstractControl): { [key: string]: any } => {
          if (!control.value) {
            // if control is empty return no error
            return null as any;
          }
          // test the value of the control against the regexp supplied
          const valid = regex.test(control.value);
          // if true, return no error (no error), else return error passed in the second parameter
          return valid ? null : error as any;
        };
      }

      static Valid(controlName: string,formcontrol:FormGroup) {
        if (formcontrol.controls[controlName].valid && (formcontrol.controls[controlName].dirty || formcontrol.controls[controlName].touched)) {
          return 'is-valid'
        }
        else if (formcontrol.controls[controlName].invalid && (formcontrol.controls[controlName].dirty || formcontrol.controls[controlName].touched)) {
          return 'is-invalid'
        }
        else {
          return ''
        }
      }
      
      static validateAllFormFields(formGroup: FormGroup) {
        Object.keys(formGroup.controls).forEach(field => {
          const control = formGroup.get(field);
          if (control instanceof FormControl) {
            control.markAsTouched({ onlySelf: true });
          } else if (control instanceof FormGroup) {
            this.validateAllFormFields(control);
          }
        });
      }
  
      static MustMatch(controlName: string, matchingControlName: string){
        return (formGroup: FormGroup) => 
        {
           const control = formGroup.controls[controlName];
           const matchingControl = formGroup.controls[matchingControlName];
          // set error on matchingControl if validation fails
          if (control.value !== matchingControl.value) {
              matchingControl.setErrors({ mustMatch: true });
              // return { mismatch: true };
             }
          else {
              matchingControl.setErrors(null);
              // return null;
              }
        }
     }
}
