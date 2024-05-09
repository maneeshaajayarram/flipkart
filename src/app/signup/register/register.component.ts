 import { Component ,OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
// import { Toast,ToastrService } from 'ngx-toastr';
// import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  
  signuser:any ='';
  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    // private toast: ToastrService,
    // private route:ActivatedRoute,
    // private router:Router
  ) {}
 
   signup = this.fb.group(
      {
        fname: ['',[Validators.required,Validators.pattern('[a-zA-Z ]+$')]],
        lname: ['',[Validators.required,Validators.pattern('[a-zA-Z ]+$')]],
        email: ['', [Validators.required, Validators.email]],
        password: [ '',[Validators.required,Validators.pattern( '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{7,}$'
      )]],
       
      },
    );
    
  
  get fname() {
    return this.signup.controls['fname'];
  }
  get lname() {
    return this.signup.controls['lname'];
  }
  get email() {
    return this.signup.controls['email'];
  }
  get password() {
    return this.signup.controls['password'];
  }
 
   signupdata(signup:FormGroup){
    this.signuser = this.signup.value;
    console.log(signup.value)
    this.http.post<any>("http://localhost:3000/users",this.signup.value).subscribe((data)=>{
      alert('successfully signed up')
    },err=>{
      alert('something went wrong')
    })
    

    }
  

}
 

  


