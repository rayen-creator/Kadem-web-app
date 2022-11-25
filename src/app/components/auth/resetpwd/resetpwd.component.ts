import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-resetpwd',
  templateUrl: './resetpwd.component.html',
  styleUrls: ['./resetpwd.component.css']
})
export class ResetpwdComponent implements OnInit {
  public restpwdForm: FormGroup;
  submitted = false;

  constructor(private router: Router,private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.restpwdForm=this.formBuilder.group(
      {
        email:['',[Validators.required,Validators.email]]
      }
    )
  }
restpwd(){
  this.submitted = true;

}
  goTologin(){
      this.router.navigate(['/login']);

  }
}
