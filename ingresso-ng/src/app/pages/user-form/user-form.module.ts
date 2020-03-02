import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserFormComponent } from './user-form.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';



@NgModule({
  declarations: [UserFormComponent, CreateUserComponent, EditUserComponent],
  imports: [
    CommonModule
  ],
  exports: [
    CreateUserComponent,
    EditUserComponent
  ]
})
export class UserFormModule { }
