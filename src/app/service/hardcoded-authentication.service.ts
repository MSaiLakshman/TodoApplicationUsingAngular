import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  authenticate(username:string,password: string){
    // console.log('Before '+this.isUserLoggedIn)
    if(username === 'SaiLakshman' && password === 'Thanu'){
      sessionStorage.setItem('authenticaterUser', username);
      // console.log('After '+this.isUserLoggedIn)
      return true;
    }
    return false;
  }

  isUserLoggedIn(){
    let user = sessionStorage.getItem('authenticaterUser');
    return !(user === null)
  }
  logout(){
    sessionStorage.removeItem('authenticaterUser');
  }
}
