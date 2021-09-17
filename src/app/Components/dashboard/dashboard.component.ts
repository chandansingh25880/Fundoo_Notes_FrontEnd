import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  fontcolors = ['color:	#00008B', 'color:#ff0000', 'color:#FF8C00', 'color:#00008B', 'color:#008000','color:#ff0000','color:	#00008B', 'color:#ff0000', 'color:#FF8C00', 'color:#00008B', 'color:#008000']
  fonttexts = ['F', 'u', 'n', 'd', 'o', 'o','N','o','t','e','s']

  constructor() { }

  ngOnInit(): void {
  }

// switchClick = 1

// noteDisplay(){
//   return this.switchClick = 1;
// }

// archieveDisplay(){
//   return this.switchClick = 2;
// }

// trashDisplay(){
//   return this.switchClick = 3;
// }

}

