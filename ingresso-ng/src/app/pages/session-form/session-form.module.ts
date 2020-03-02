import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SessionFormComponent } from './session-form.component';
import { RouterModule } from '@angular/router';
import { CreateSessionComponent } from './create-session/create-session.component';
import { EditSessionComponent } from './edit-session/edit-session.component';
import { AdminSidebarModule } from 'src/app/components/admin-sidebar/admin-sidebar.module';



@NgModule({
  declarations: [SessionFormComponent, CreateSessionComponent, EditSessionComponent],
  imports: [
    CommonModule,
    RouterModule,
    AdminSidebarModule
  ],
  exports: [
    CreateSessionComponent, 
    EditSessionComponent
  ]
})
export class SessionFormModule { }
