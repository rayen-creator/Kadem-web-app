import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs'; import { AuthService } from './auth.service';
;

@Injectable()
export class AuthInterceptorInterceptor implements HttpInterceptor {

  constructor(private auth: AuthService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const authToken = this.auth.getToken();
    const authRequest = request.clone({
      headers: request.headers.set(
        "Authorization", `Bearer ${authToken}`
       )
    });
      return next.handle(authRequest).pipe(
      catchError(error => {
        if (error.status === 401 || error.status === 403) {
        }
        return throwError(() => new Error(error));
      })
    );
  }
}
