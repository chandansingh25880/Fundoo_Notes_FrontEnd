import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  fontcolors = ['color:	#00008B', 'color:#ff0000', 'color:#FF8C00', 'color:#00008B', 'color:#008000','color:#ff0000']
  fonttexts = ['F', 'u', 'n', 'd', 'o', 'o']
  LoginForm!: FormGroup;
    submitted = false;

  constructor(private formBuilder: FormBuilder ,private user: UserService, public route: Router) {
  }

  ngOnInit() :void{
    this.LoginForm=this.formBuilder.group({
    email:['',Validators.required]  
    })
    }

  loginForm: FormGroup = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
 
  
  })
  get f(){return this.loginForm.controls}
  
  onLogin() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      console.log("invalid data");
      return; 
    }
      else {   
        // console.log("login successful")
        let reqData = {
          email: this.loginForm.value.email,
          password: this.loginForm.value.password,
        }
        this.user.login(reqData).subscribe
          (
            (response: any) => {
              localStorage.setItem('Token', response['id']);
              localStorage.setItem( 'email',response['email']);
              localStorage.setItem( 'password',response['password']);
              console.log(response);
    
            },error =>{
              console.log(error.error.error);
            }
         
          );
      }
    }
  }
