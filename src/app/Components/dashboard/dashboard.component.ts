import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  fontcolors = ['color:	#00008B', 'color:#ff0000', 'color:#FF8C00', 'color:#00008B', 'color:#008000','color:#ff0000','color:	#00008B', 'color:#ff0000', 'color:#FF8C00', 'color:#00008B', 'color:#008000']
  fonttexts = ['F', 'u', 'n', 'd', 'o', 'o','N','o','t','e','s']
  opened =true;

  constructor( private router: Router ) { }

  ngOnInit(): void {
  }
  toggleSidebar(){
    this.opened = !this.opened
  }
  logout() {
    sessionStorage.clear();
    localStorage.clear();
    this.router.navigateByUrl('login');
  }
}
