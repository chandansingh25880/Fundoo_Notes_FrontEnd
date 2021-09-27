import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpService } from './http.service';


@Injectable({
  providedIn: 'root'
})
export class NoteserviceService {
  token: any;

  constructor(private http: HttpService) { 
    this.token=localStorage.getItem('Token');
  }
  url =environment.baseUrl;

  createNote(data: any): Observable<any> {
    console.log(data,this.token);
    
    let httpAuthOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': this.token
      })
    };
    return this.http.postService('/notes/addNotes',data, true, httpAuthOptions);
  }
  getAllNotes(): Observable<any> {
    console.log(this.token);
    
    let httpAuthOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': this.token
      })
    };
    return this.http.getService('/notes/getNotesList', true, httpAuthOptions);
  }
  updateNoteService(data:any){
    let httpAuthOptions = {
      headers:new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization': this.token
      })
    };
    return this.http.postService('/notes/updateNotes',data, true, httpAuthOptions);

}
}
