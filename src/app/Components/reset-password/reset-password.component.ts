import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSnackBarConfig } from '@angular/material/snack-bar';


@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit
{
  fontcolors = ['color:	#00008B', 'color:#ff0000', 'color:#FF8C00', 'color:#00008B', 'color:#008000','color:#ff0000']
  fonttexts = ['F', 'u', 'n', 'd', 'o', 'o']
  resetpassword!: FormGroup;
  submitted = false;
  token: any;

  constructor(private formBuilder: FormBuilder,
    public snackBar: MatSnackBar, private activeRoute: ActivatedRoute, private user: UserService) { }

  openSnackBar(message: string, duration: number) {
    let config = new MatSnackBarConfig();
    if (duration != 0) {
      config.duration = duration;
    }
    this.snackBar.open(message, undefined, config);
  }


  ngOnInit(): void {
    this.resetpassword = this.formBuilder.group({

      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
    });
    this.token = this.activeRoute.snapshot.paramMap.get('token');
  }
  onsubmit() {
    if (this.resetpassword.valid) {
      this.openSnackBar('Processing', 2000);
      let reqData = {
        password:this.resetpassword.value.password,
        confirmPassword:this.resetpassword.value.confirmPassword
      }
      console.log(reqData);
      
      this.user.resetpassword(this.token,reqData).subscribe(
        (response : any) => {
          this.openSnackBar('Password Reset Successfully', 2000);
        },
        error => {
          if (error['status'] == 0) {
            this.openSnackBar('Password Reset Failed: Server Offline', 2000,);
          }
          else {
            this.openSnackBar('Password Reset Failed:', 2000);
          }
        });
    }
  }
  reqData(reqData: any) {
    throw new Error('Method not implemented.');  
  
  } 
 }
