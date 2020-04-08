import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { BasicAuthenticationService } from '../basic-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class HttpIntercepterBasicAuthService implements HttpInterceptor {

  constructor(private basicAuthenticationService: BasicAuthenticationService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler){
    /*let username = 'marko'
    let password = 'sifra'
    let basicAutheHeaderString = 'Basic '+ window.btoa(username+':'+password)*/
    let basicAutheHeaderString = this.basicAuthenticationService.getAuthenticatedToken();
    let username = this.basicAuthenticationService.getAuthenticatedUser();

    if(basicAutheHeaderString && username){
      req = req.clone({
        setHeaders:{
          Authorization: basicAutheHeaderString
        }
      })
    }
    return next.handle(req);
  }
}


