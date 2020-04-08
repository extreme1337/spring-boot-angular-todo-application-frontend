import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { API_URL } from 'src/app/app.constants';

export class HelloWordlBean{
  constructor(public message: String) {  }
}

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(private http: HttpClient) { }

  executeHelloWorldBeanService(){
    /*let basicAuthHeaderString = this.createBasicAuthenticationHttpHeader()
    let headers = new HttpHeaders({
      Authorization: basicAuthHeaderString
    })*/
    return this.http.get<HelloWordlBean>(`${API_URL}/hello-world-bean`
    //,{headers}
    );
    //console.log("Execute Hello World Bean Service")
  }

 /* createBasicAuthenticationHttpHeader(){
    let username = 'marko'
    let password = 'sifra'
    let basicAutheHeaderString = 'Basic '+ window.btoa(username+':'+password)
    return basicAutheHeaderString
  }*/

  executeHelloWorldBeanServiceWithPathVariable(name){
    /*let basicAuthHeaderString = this.createBasicAuthenticationHttpHeader()
    let headers = new HttpHeaders({
      Authorization: basicAuthHeaderString
    })*/
    return this.http.get<HelloWordlBean>(`${API_URL}/hello-world/path-variable/${name}`
    //,{headers}
    );
    //console.log("Execute Hello World Bean Service")
  }

}
