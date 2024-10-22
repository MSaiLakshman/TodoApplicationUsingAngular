import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
    username="SaiLakshman"
    password=""
    errorMessage="Invalid Credentials!!"
    invalidLogin=false

    constructor(private router: Router, public hardcodedAuthenticationService: HardcodedAuthenticationService) {
      
    }
    ngOnInit() {}

    handleLogin(){
      if(this.hardcodedAuthenticationService.authenticate(this.username, this.password)){
        this.router.navigate(['welcome', this.username])
        this.invalidLogin=false
      }
      else{
        this.invalidLogin=true
      }
    }
}
