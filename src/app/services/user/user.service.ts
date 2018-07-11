import { Injectable } from '@angular/core';
import {Router} from "@angular/router";

@Injectable()
export class UserService {

  constructor(private router: Router) { }

  username = "admin";
  password = "admin";

  login(usr,pass){
    if(usr == this.username && pass == this.password){
      sessionStorage.setItem("username", this.username);
      sessionStorage.setItem("logged", "true");
      this.router.navigate(['dashboard']);
      return true;
    }else{
      return false;
    }
  }

  logout(){

      sessionStorage.clear();
      this.router.navigate(['/']);
      sessionStorage.setItem("logged", "false");
  }

  checkSession(){
    if(sessionStorage.getItem('username') == null){
      return false;
    }else{
      return true;
    }
  }
}
