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
  DATA = '/data';
  USER = '/users';

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    console.log(req);

    if (req.url.startsWith(this.DATA)) {
      req = req.clone({
        url: req.url.replace(this.DATA, dataUrl),
        withCredentials: true,
      });
    }

    if (req.url.startsWith(this.USER)) {
      req = req.clone({
        url: req.url.replace(this.USER, userUrl),
        withCredentials: true,
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
