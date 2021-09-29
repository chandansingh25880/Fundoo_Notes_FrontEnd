import { Component, Input, OnInit } from '@angular/core';
import {NoteserviceService} from 'src/app/services/noteservice.service'

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})

export class IconsComponent implements OnInit {

  @Input() notecard:any

  constructor(private NoteserviceService:NoteserviceService) { }

  ngOnInit(): void {
  }
  deleteNote(){
    let req={
      noteIdList: [this.notecard.id],
      isDeleted: true,
    }
    this.NoteserviceService.deleteNoteService(req).subscribe((response)=>{
      console.log(response);
    })
    console.log();
                   
  }
}
