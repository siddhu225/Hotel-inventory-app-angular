import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  isLoggedIn = false;
  constructor() {
  }
  login(email:string, password: string) {
    if (email && password) {
      this.isLoggedIn = true;
    }
    return this.isLoggedIn;
  }
}
