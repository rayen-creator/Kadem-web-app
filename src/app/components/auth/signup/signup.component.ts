import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AbstractControlOptions, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Customvalidator } from '../utils/customvalidator';
import { AuthService } from 'src/app/core/helpers/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  public signupForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private router: Router,private auth:AuthService) { }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group(
      {
        username: ['', [Validators.minLength(3), Validators.required]],
        email: ['', [Validators.email, Validators.required]],
        password: ['', Validators.compose([
          // 1. Password Field is Required
          Validators.required,
          // 2. check whether the entered password has a number
          Customvalidator.patternValidator(/\d/, { hasNumber: true }),
          // 3. check whether the entered password has upper case letter
          Customvalidator.patternValidator(/[A-Z]/, { hasCapitalCase: true }),
          // 4. check whether the entered password has a lower-case letter
          Customvalidator.patternValidator(/[a-z]/, { hasSmallCase: true }),
          // 5. check whether the entered password has a special character
          Customvalidator.patternValidator(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/, { hasSpecialCharacters: true }),
          Validators.minLength(8)])
        ],
        confirmpassword: ['', Validators.required],
        terms :[false ,Validators.requiredTrue]
      },
      {
        Validators: [Customvalidator.MustMatch('password', 'confirmpassword')] 
      }  as AbstractControlOptions
    )
  }

  Valid(controlname:any,signupForm:any){
   return Customvalidator.Valid(controlname,signupForm)

  }
  
  // Valid(controlName: string) {
  //   if (this.signupForm.controls[controlName].valid && (this.signupForm.controls[controlName].dirty || this.signupForm.controls[controlName].touched)) {
  //     return 'is-valid'
  //   }
  //   else if (this.signupForm.controls[controlName].invalid && (this.signupForm.controls[controlName].dirty || this.signupForm.controls[controlName].touched)) {
  //     return 'is-invalid'
  //   }
  //   else {
  //     return ''
  //   }
  // }

  Signup(form : any) {
    this.submitted = true;
    console.log("submitted :"+this.submitted)
    if (this.signupForm.valid) {
      console.log('username :' + this.signupForm.value.username);
      console.log('email :' + this.signupForm.value.email);
      console.log('password :' + this.signupForm.value.password);
      console.log('confirm password :' + this.signupForm.value.confirmpassword);
      
     this.auth.signin(form).subscribe(
      ()=>{
        this.router.navigate(['/login'])
      }
     )
    } else {
      Customvalidator.validateAllFormFields(this.signupForm); 
    }
  }



  goTologin() {
    this.router.navigate(['/login']);
  }

}
