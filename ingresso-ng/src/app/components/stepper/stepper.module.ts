import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StepperComponent } from './stepper.component';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [StepperComponent],
  imports: [
    CommonModule,
    RouterModule,
    BrowserAnimationsModule
  ],
  exports: [
    StepperComponent
  ]
})
export class StepperModule { }
