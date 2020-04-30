import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreditCardDirective } from './credit-card/credit-card.directive';
import { OnlyNumberDirective } from './only-number/only-number.directive';



@NgModule({
  declarations: [CreditCardDirective, OnlyNumberDirective],
  imports: [
    CommonModule
  ],
  exports: [
    CreditCardDirective,
    OnlyNumberDirective
  ]
})
export class DirectivesModule { }
