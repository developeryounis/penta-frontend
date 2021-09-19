import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor {

  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let tokenInfo = localStorage.getItem('Token');

    if (tokenInfo) {
      req = req.clone({
        setHeaders: {
          Authorization: `Bearer ${tokenInfo}`,
          'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
        }
      });
    }

    return next.handle(req);
  }
}
