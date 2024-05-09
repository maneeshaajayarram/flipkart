import { Component } from '@angular/core';
import { Router } from '@angular/router';
Router
@Component({
  selector: 'app-frontpage',
  templateUrl: './frontpage.component.html',
  styleUrl: './frontpage.component.scss'
})
export class FrontpageComponent {

  constructor(private router: Router){}
  getSignupPage(){
    this.router.navigate(['/register'])
  }
}

