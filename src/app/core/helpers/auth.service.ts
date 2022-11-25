import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url:string;
  public token: string;
  public username:string;
  public email:string;
  // Assure l'envoie d'un paramètre aux autres components
  //Un Subject est à la fois un observable ET un observateur. 
  //On peut donc subscribe dessus, mais également lui envoyer des valeurs :
  private authStatusListener = new Subject<boolean>();
  private isUserAuthenticated = false;

  constructor(private http: HttpClient,private router: Router) {
    this.url=environment.defaultUrl;

  }

  signin(user:User){
   return this.http.post(this.url+'/signup',user);
  }
  getToken() {
    return this.token;
  }

  getUsername(){
    return localStorage.getItem('username')
  }
  getUserEmail(){
    return localStorage.getItem('email')
  }

  getAuthStatusListener() {
    return this.authStatusListener.asObservable();
  }

  isUserAuth() {
    return this.isUserAuthenticated;
  }

  login(user:User) {
    this.http.post<{ token: string , username:string ,email:string}>(this.url+'/login', user).subscribe(
      res => {
        
        const token = res.token;
        const username=res.username;
        const email=res.email;
        this.username=username;
        this.email=email;
        this.token = token;
        if (token) {
          this.isUserAuthenticated = true;
          this.authStatusListener.next(true);
          this.saveAuthData(token ,username,email);
          this.router.navigate(['/backoffice']);
        }
      }
    )
  }
  autoAuthUser() {
    const token = localStorage.getItem('token');
    if (!token) {
      return;
    }
      this.token = token;
      this.isUserAuthenticated = true;
      this.authStatusListener.next(true);
    
  }

  logout() {
    this.clearAuthData();
    this.isUserAuthenticated = false;
    this.authStatusListener.next(false);
    this.router.navigate(['/login']);    
  }
  private clearAuthData() {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    localStorage.removeItem('email');

  }

  private saveAuthData(token: string, username:string,email:string) {
    localStorage.setItem('token',  token);
    localStorage.setItem('username',  username);
    localStorage.setItem('email',  email);

  }

}
