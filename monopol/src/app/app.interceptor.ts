import {
  HTTP_INTERCEPTORS,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable, Provider } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

const dataUrl = environment.apiUrl;
const userUrl = environment.userUrl;

@Injectable()
class AppInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    console.log(req);

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

    return next.handle(req);
  }
}

export const appInterceptorPrivoder: Provider = {
  useClass: AppInterceptor,
  multi: true,
  provide: HTTP_INTERCEPTORS,
};
