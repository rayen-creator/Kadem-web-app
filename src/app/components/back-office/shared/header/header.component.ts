import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/core/helpers/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  username:string;
  userIsAuthenticated = false;
  private authListenerSubs: Subscription;
  constructor(private router: Router,private auth:AuthService) { }

  ngOnInit(): void {
    this.userIsAuthenticated = this.auth.isUserAuth();
    this.authListenerSubs = this.auth.getAuthStatusListener().subscribe(
      (isAuthenticated) => {
        this.userIsAuthenticated = isAuthenticated;
      }
    )
    this.username=this.auth.getUserEmail();
    console.log("userIsAuthenticated : "+this.userIsAuthenticated);
  }

  goTologin() {
    this.router.navigate(['/login']);
  }

  ngOnDestroy(): void {
    this.authListenerSubs.unsubscribe();
 }
 logout(){
  this.auth.logout();
 }
}
