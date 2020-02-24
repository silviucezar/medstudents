import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class Token implements HttpInterceptor {
  constructor() { }

  intercept(request:HttpRequest<any>,next:HttpHandler) : Observable<HttpEvent<any>> {
    let tokenizedReq = request.clone({
      setHeaders : {
        Authorization : 'Bearer xx.yy.zz'
      }
    });
    return next.handle(tokenizedReq);
  }
}