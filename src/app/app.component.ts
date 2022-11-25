import { Component, OnInit } from '@angular/core';
import { AuthService } from './core/helpers/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'mini_project';
  constructor(private auth: AuthService){}  
  ngOnInit(){  
    this.auth.autoAuthUser();
  } 
}
