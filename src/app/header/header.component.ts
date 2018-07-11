import { Component, OnInit } from '@angular/core';
import { FormBuilder , FormGroup , Validators } from "@angular/forms";
import { UserService } from '../services/user/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public showMenu: boolean = false;
  public top: number = -300;
  public opacity: number = 1;

  public loginForm : FormGroup;
  public loginInformation : Object;
  public modalState : boolean = false;

  public username : string = sessionStorage.getItem('username');

  public isLoggedIn : boolean = JSON.parse(sessionStorage.getItem('logged'));

  constructor(private fb : FormBuilder, private userService : UserService) {
    this.createLoginForm();
  }

  ngOnInit() {
    console.log(sessionStorage.getItem('username'));
  }

  toggle(){
    if(this.showMenu) {
        this.top = -300;
        this.opacity = 1;
        this.showMenu = false
    } else {
      this.top = 70;
      this.opacity = 1;
      this.showMenu = true;
    }
  }

  createLoginForm() {
      this.loginForm = this.fb.group({
          username : '',
          password : ''
      });
  }

  loginSubmit(){
    let loginInputs = this.loginForm.value;

    if(this.userService.login(loginInputs['username'], loginInputs['password'])){
      this.isLoggedIn = true;
      this.modalState = false;
      this.username = loginInputs['username'];
    }else{
      this.isLoggedIn = false;
    }

    console.log(this.isLoggedIn);

  }

  modalToggle(){
    if(this.modalState){
      this.modalState = false;
    }else{
      this.modalState = true;
    }
  }

  logout(){
    this.userService.logout();
    this.isLoggedIn = false;
  }

}
