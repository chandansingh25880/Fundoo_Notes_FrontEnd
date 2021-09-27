import { Component, OnInit } from '@angular/core';
import { NoteserviceService } from 'src/app/services/noteservice.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {

  noteList:any = []
  constructor( private noteservice:NoteserviceService) {
    
   }
   
  ngOnInit(): void {
    console.log("running get all notes")
    this.getAllNotes();
    
  }
  getAllNotes(): void {
    this.noteservice.getAllNotes().subscribe((response: any) =>{
      // console.log(response);
      this.noteList=response.data.data;
    }
    )

  }

}


