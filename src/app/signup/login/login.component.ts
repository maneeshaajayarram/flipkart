import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { find, pipe } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  user: any;
  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {}

  loginform = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
  });
  get email() {
    return this.loginform.controls['email'];
  }
  get password() {
    return this.loginform.controls['password'];
  }
  receivedData() {
    this.http.get('http://localhost:3000/users').subscribe((res: any) => {
      console.log(res, 'resss');

      let user = res.find((a: any) => {
        return (
          a.email === this.loginform.controls['email'].value &&
          a.password === this.loginform.controls['password'].value
        );
      });
      if (user) {
        this.router.navigate(['/products']);
      } else {
        alert('Invalid email or password');
      }
    });
  }
}
interface logindetails {
  email: string;
  fname: string;
  id: string;
  lname: string;
  password: string;
}
