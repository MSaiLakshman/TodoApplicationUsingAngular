import { Component } from '@angular/core';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  isUserLoggedIn: boolean = false;
  constructor(public hardCodedAuthenticationServics: HardcodedAuthenticationService) {}
  ngOnInit(){
    this.isUserLoggedIn=this.hardCodedAuthenticationServics.isUserLoggedIn();
  }
}
