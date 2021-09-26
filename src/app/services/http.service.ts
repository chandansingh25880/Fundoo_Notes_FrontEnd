import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  baseUrl = environment.baseUrl;
  token : any;

  constructor(private http: HttpClient) { }

  postService( url: string = '',payload: any = null, tokenRequired: boolean = false, httpOptions:any=null) {
    /* handles post operations
      params : id  : id of question or comment to add/post,
      apiendpoint : endpoint i.e 'comments/' , 'answers/', 'editquestions/'
  */
    return this.http.post(this.baseUrl+url, payload, tokenRequired && httpOptions);
  }

  getService( url: string = '' , tokenRequired: boolean = false, httpOptions:any=null) {
    /* handles post operations
      params : id  : id of question or comment to add/post,
      apiendpoint : endpoint i.e 'comments/' , 'answers/', 'editquestions/'
  */
    return this.http.get(this.baseUrl+url, tokenRequired && httpOptions);
  }


}
