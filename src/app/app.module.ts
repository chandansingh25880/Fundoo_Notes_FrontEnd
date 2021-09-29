import { NgModule } from '@angular/core';                                               
import { BrowserModule } from '@angular/platform-browser'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './Components/registration/registration.component';
import { LoginComponent } from './Components/login/login.component';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';    
import { MatCheckboxModule } from '@angular/material/checkbox';             
import {MatButtonModule} from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ForgetPasswordComponent } from './Components/forget-password/forget-password.component';
import { ResetPasswordComponent } from './Components/reset-password/reset-password.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { NotesComponent } from './Components/notes/notes.component';
import { RemindersComponent } from './Components/reminders/reminders.component';
import { EditlabelsComponent } from './Components/editlabels/editlabels.component';
import { ArchiveComponent } from './Components/archive/archive.component';
import { TrashComponent } from './Components/trash/trash.component';
import {MaterialModule} from './material/material.module';
import { CreatenoteComponent } from './Components/createnote/createnote.component';
import { IconsComponent } from './Components/icons/icons.component';
import { DisplaynoteComponent } from './Components/displaynote/displaynote.component';
import { UpdatenoteComponent} from './Components/updatenote/updatenote.component';



                                                              
@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    ForgetPasswordComponent,
    ResetPasswordComponent,
    DashboardComponent,
    NotesComponent,
    RemindersComponent,
    EditlabelsComponent,
    ArchiveComponent,
    TrashComponent,
    CreatenoteComponent,
    IconsComponent,
    DisplaynoteComponent,
    UpdatenoteComponent,
  
    
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MaterialModule ,

  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }







 








