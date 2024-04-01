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

    if (req.url.startsWith('http://localhost:3030') && accessToken) {
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
        this.errorService.setError(err);
        if (err.status === 401) {
          //
        } else {
          this.router.navigate(['/error']);
        }
        return throwError(() => err);
      })
    );
  }
}

export const appInterceptorPrivoder: Provider = {
  useClass: AppInterceptor,
  multi: true,
  provide: HTTP_INTERCEPTORS,
};
