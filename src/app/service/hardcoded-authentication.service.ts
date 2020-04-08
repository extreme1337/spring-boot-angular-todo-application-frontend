import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  authenticate(user,password){
    //console.log('before ' + this.isUserLoggedIn());
    if(user==="marko" && password==='sifra'){
      sessionStorage.setItem('authenticatedUser',user);
      //console.log('after '+this.isUserLoggedIn());
      return true;
    }else{
      return false;
    }
  }

  isUserLoggedIn(){
    let user = sessionStorage.getItem('authenticatedUser')
    return !(user===null)
  }

  logout(){
    sessionStorage.removeItem('authenticatedUser')
  }
}
