import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSnackBarConfig } from '@angular/material/snack-bar';

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

  constructor(private formBuilder: FormBuilder ,private user: UserService, public route: Router,public snackBar: MatSnackBar) {
  }
  openSnackBar(message: string, duration: number) {
    let config = new MatSnackBarConfig();
    if (duration != 0)
    {
      config.duration = duration; 
    }
    this.snackBar.open(message, undefined, config);
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
        let reqData = {
          email: this.loginForm.value.email,
          password: this.loginForm.value.password,
        }
        this.user.login(reqData).subscribe
          (
            (response: any) => {
              this.snackBar.open('login success'," ",{ duration: 1000});
            
              localStorage.setItem('Token', response['id']);
              this.route.navigate(['dashboard']);
              console.log(response);
            },
              error =>{
                this.openSnackBar ('Login failed '+error.error.message,2000);
    
            // },error =>{
            //   console.log(error.error.error);
            }
         
          );
      }
    }
  }
