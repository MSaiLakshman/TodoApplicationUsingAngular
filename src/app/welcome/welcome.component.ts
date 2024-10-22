import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent {

  name = ''
  constructor(private route: ActivatedRoute) { }

  ngOnInit() { 
    this.name=this.route.snapshot.params['name']; 
  }
}
 