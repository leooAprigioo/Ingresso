import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TicketTypeFormComponent } from './ticket-type-form.component';
import { CreateTicketTypeComponent } from './create-ticket-type/create-ticket-type.component';
import { EditTicketTypeComponent } from './edit-ticket-type/edit-ticket-type.component';
import { RouterModule } from '@angular/router';
import { AdminSidebarModule } from 'src/app/components/admin-sidebar/admin-sidebar.module';



@NgModule({
  declarations: [TicketTypeFormComponent, CreateTicketTypeComponent, EditTicketTypeComponent],
  imports: [
    CommonModule,
    RouterModule,
    AdminSidebarModule
  ],
  exports: [
    CreateTicketTypeComponent, 
    EditTicketTypeComponent
  ]
})
export class TicketTypeFormModule { }