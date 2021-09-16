import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSnackBarConfig } from '@angular/material/snack-bar';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
 export class ForgetPasswordComponent implements OnInit {
  fontcolors = ['color:	#00008B', 'color:#ff0000', 'color:#FF8C00', 'color:#00008B', 'color:#008000','color:#ff0000']
  fonttexts = ['F', 'u', 'n', 'd', 'o', 'o']

  ForgetPasswordForm!: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder, public snackBar: MatSnackBar, private user: UserService) { }

  ngOnInit(): void {
    this.ForgetPasswordForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
    })
  }

  get f() { return this.ForgetPasswordForm.controls; }

  openSnackBar(message: string, duration: number) {
    let config = new MatSnackBarConfig();
    if (duration != 0) {
      config.duration = duration;
    }
    this.snackBar.open(message, undefined, config);
  }

  onsubmit() 
  {
    if (this.ForgetPasswordForm.value) {
      this.openSnackBar('Processing', 2000);
      let reqData = {
        email: this.ForgetPasswordForm.value.email
      }
      this.user.forgetpassword(reqData).subscribe(
        (response : any) => {
          this.openSnackBar('Password reset link has been sent to your Email', 2000);
        },
        error => {
          if (error['status'] == 0) {
            this.openSnackBar('Sending password reset link failed: Server offline', 2000,);
          }
          else {
            this.openSnackBar('Sending password reset link failed ', 2000);
          }
        });
    }
  }
  
}
