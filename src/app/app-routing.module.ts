import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgetPasswordComponent } from './Components/forget-password/forget-password.component';
import { LoginComponent } from './Components/login/login.component';
import { RegistrationComponent } from './Components/registration/registration.component';
import { ResetPasswordComponent } from './Components/reset-password/reset-password.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { NotesComponent } from './Components/notes/notes.component';
// import { RemindersComponent } from './Components/reminders/reminders.component';
// import { EditlabelsComponent } from './Components/editlabels/editlabels.component';
import { ArchiveComponent } from './Components/archive/archive.component';
import { TrashComponent } from './Components/trash/trash.component';
import { CreatenoteComponent } from './Components/createnote/createnote.component';
import { IconsComponent } from './Components/icons/icons.component';


const routes: Routes = [
  {
    path : "",
    redirectTo: "login",
    pathMatch: "full"
  },
  { path: "login", component: LoginComponent } ,
  { path: "registration", component: RegistrationComponent } ,
  { path: "forget-password", component: ForgetPasswordComponent} ,
  { path: 'resetpassword/:token', component: ResetPasswordComponent },
  { path: "createnote" , component:CreatenoteComponent},
  { path: "icons" , component:IconsComponent},

  {
    path: "dashboard",
    component: DashboardComponent,
    children:[
      {
        path:'notes',
        component: NotesComponent
      },
      {
        path:'archieve',
        component: ArchiveComponent
      },
      {
        path:'trash',
        component:TrashComponent
      },
      // {
      //   path:'createnote',
      //   component:CreatenoteComponent
      // }
    ]
  }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
    
})
export class AppRoutingModule { }
