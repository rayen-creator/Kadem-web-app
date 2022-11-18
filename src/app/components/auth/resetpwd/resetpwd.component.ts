import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-resetpwd',
  templateUrl: './resetpwd.component.html',
  styleUrls: ['./resetpwd.component.css']
})
export class ResetpwdComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goTologin(){
      this.router.navigate(['/login']);

  }
}
