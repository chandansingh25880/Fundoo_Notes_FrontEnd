import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  token: any;
  authService: any;
  route: any;
 
  constructor(private httpService: HttpService) {
    this.token=localStorage.getItem('Token');
   }
  
  register(data: any) {
    console.log("given data is", data);
    return this.httpService.postService("/user/userSignUp", data, false, false); 
  }

  login(data: any) {
    let httpAuthOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': this.token
      })                                         
    };

    console.log("given data is", data);
    return this.httpService.postService("/user/login", data, false, httpAuthOptions);    
  }   
  
  forgetpassword(data : any){
    console.log("given data is", data);
    return this.httpService.postService("/user/reset", data, false, false);
}

resetpassword(token : any, data : any){
  console.log("given data is", data);
  return this.httpService.postService("/user/reset-password", data, false, false);
}

 logout()
 { 
  let httpAuthOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.token
    })
  };
    localStorage.removeItem('token');
   return this.httpService.postService("/user/logout", {}, false, httpAuthOptions);
 }
}
