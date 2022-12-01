import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AbstractControlOptions, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Customvalidator } from '../utils/customvalidator';
import { AuthService } from 'src/app/core/helpers/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  public signupForm: FormGroup;
  public submitted = false;
  public usernameExists:boolean;
  public emailExists:boolean;
  constructor(
    private formBuilder: FormBuilder, 
    private router: Router,
    private auth:AuthService,
    private toastr: ToastrService) { }

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
  

  Signup(form : any) {
    this.submitted = true;
    this.emailExists=false;
    this.usernameExists=false;
    console.log("submitted :"+this.submitted)
    if (this.signupForm.valid) {
      
     this.auth.signin(form).subscribe( 
       (res)=>{
      const emailExists=res.emailExists;
      const usernameExists=res.usernameExists;
      this.emailExists=emailExists;
      this.usernameExists=usernameExists;
      if ((!emailExists) && (!usernameExists)){
        this.toastr.success('Account created successfully , Time to log in','Account created !')

        this.router.navigate(['/login'])
      }
       console.log("username exists :"+this.usernameExists);
       console.log("email exists :"+this.emailExists);
   })
    } else {
      Customvalidator.validateAllFormFields(this.signupForm); 
    }
  }



  goTologin() {
    this.router.navigate(['/login']);
  }

}
