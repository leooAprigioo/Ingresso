import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdvisoryRatingComponent } from './advisory-rating.component';

@NgModule({
  declarations: [
    AdvisoryRatingComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AdvisoryRatingComponent
  ]
})
export class AdvisoryRatingModule { }
