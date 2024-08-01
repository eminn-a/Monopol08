import {
  HTTP_INTERCEPTORS,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable, Provider } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { ErrorService } from './core/error/error.service';
import { Router } from '@angular/router';

export
@Injectable({ providedIn: 'root' })
class AppInterceptor implements HttpInterceptor {
  constructor(private errorService: ErrorService, private router: Router) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const accessToken = localStorage.getItem('accessToken');

    if (
      req.url.startsWith('https://api-kwygehix6a-uc.a.run.app') &&
      accessToken
    ) {
      req = req.clone({
        setHeaders: {
          'X-Authorization': accessToken,
        },
      });
    }

    if (!req.headers.has('Content-Type')) {
      req = req.clone({
        setHeaders: {
          'Content-Type': 'application/json',
        },
      });
    }

    return next.handle(req).pipe(
      catchError((err) => {
        if (err.status === 401) {
        } else if (err.status === 403) {
          err.message = 'Email or password does not match try again!';
          this.errorService.setError(err);
        } else if (err.status === 409) {
          err.message = 'This email is already registered!';
          this.errorService.setError(err);
        } else {
          //Catch all errors and set default message
          this.errorService.setError(err);
        }
        return throwError(err);
      })
    );
  }
}

export const appInterceptorPrivoder: Provider = {
  useClass: AppInterceptor,
  multi: true,
  provide: HTTP_INTERCEPTORS,
};
