import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SessionFormComponent } from './session-form.component';
import { RouterModule } from '@angular/router';
import { CreateSessionComponent } from './create-session/create-session.component';
import { EditSessionComponent } from './edit-session/edit-session.component';
import { AdminSidebarModule } from 'src/app/components/admin-sidebar/admin-sidebar.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [SessionFormComponent, CreateSessionComponent, EditSessionComponent],
  imports: [
    CommonModule,
    RouterModule,
    AdminSidebarModule,
    FormsModule, 
    ReactiveFormsModule
  ],
  exports: [
    CreateSessionComponent, 
    EditSessionComponent
  ]
})
export class SessionFormModule { }
