import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { isEmpty } from 'rxjs';
import { AuthService } from 'src/app/core/helpers/auth.service';
import { User } from 'src/app/core/models/user';
import { Customvalidator } from '../utils/customvalidator';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginform: FormGroup
  userNotFound:boolean;
  constructor(private auth: AuthService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.loginform = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })

  }

  Valid(controlname: any, loginform: any) {
    return Customvalidator.Valid(controlname, loginform)

  }


  login(form: User) {
    if (form.email != "" && form.password != "") {
      this.auth.login(form)
      console.log("Login form", form);


      // if (this.auth.getToken != null)
      // else {
      //   this.userNotFound=true;
      // }
    } else {
      Customvalidator.validateAllFormFields(this.loginform);
    }
  }
}
