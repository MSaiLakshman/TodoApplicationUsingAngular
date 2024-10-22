import { Component } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrl: './error.component.css'
})
export class ErrorComponent {
  errorMessage='Some error occurred!! Contact support ****------------********'

  constructor() { }
  ngOnInit(){
    
  }
}
