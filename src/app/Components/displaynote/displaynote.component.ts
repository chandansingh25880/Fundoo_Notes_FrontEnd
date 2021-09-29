import { Component, OnInit,Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {UpdatenoteComponent} from 'src/app/Components/updatenote/updatenote.component'


@Component({
  selector: 'app-displaynote',
  templateUrl: './displaynote.component.html',
  styleUrls: ['./displaynote.component.scss']
})
export class DisplaynoteComponent implements OnInit {
  @Input() notesArray: any

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(notecard: any): void {
    const dialogRef = this.dialog.open(UpdatenoteComponent, {
      width:'400px',
     
    data: notecard
    });

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log('Dialog was closed',result );
    // });
  }
}



