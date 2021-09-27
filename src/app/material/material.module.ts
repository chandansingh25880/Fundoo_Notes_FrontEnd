import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import {MatMenuModule} from '@angular/material/menu' ;
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {MatExpansionModule} from '@angular/material/expansion';
import { FormsModule } from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatToolbarModule,
    MatDividerModule,
    MatMenuModule,
    MatSnackBarModule,
    MatExpansionModule,
    FormsModule,
    MatDialogModule,
    
    
  ],
  exports: [
    MatToolbarModule,
    MatToolbarModule,
    MatSidenavModule,
    MatDividerModule,
    MatMenuModule,
    MatSnackBarModule,
    MatExpansionModule,
    FormsModule,
    MatDialogModule

  ]
})
export class MaterialModule { }
