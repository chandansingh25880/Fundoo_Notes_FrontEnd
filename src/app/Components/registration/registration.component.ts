import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  fontcolors = ['color:	#00008B', 'color:#ff0000', 'color:#FF8C00', 'color:#00008B', 'color:#008000','color:#ff0000']
  fonttexts = ['F', 'u', 'n', 'd', 'o', 'o']
  registerForm!: FormGroup;
  submitted = false;
 
  constructor(private formBuilder: FormBuilder,private user: UserService,public snackBar: MatSnackBar) { }
   
  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({

      firstName: ['', Validators.required],
      lastName: ['', Validators.required],

      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      service: ['advance', Validators.required] 
  
    })
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit() {
    console.log("onSubmit method is calling",this.registerForm.value)
    if (this.registerForm.invalid) {
      console.log("Its invalid Form");
      return;
    } 

    else {
      console.log(" it is valid")
      let data={

        "firstName":this.registerForm.value.firstName,
        "lastName":this.registerForm.value.lastName,
        "email":this.registerForm.value.email,
        "password":this.registerForm.value.password,
        "service":this.registerForm.value.service
      
      }
      this.user.register(data).subscribe(response =>{
        console.log(response);
        this.snackBar.open("Registered"," ",{ duration: 1000});
      }, error => {
        console.log("error in register", error);
        this.snackBar.open("Registration Failed!!"," ",{ duration: 1000});
      });
  }
}
}



