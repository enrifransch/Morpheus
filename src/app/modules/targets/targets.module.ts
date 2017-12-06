import { TargetsComponent } from './views/targets.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TargetsRoutingModule } from './targets-routing.module';

@NgModule({
  imports: [
    CommonModule,
    TargetsRoutingModule
  ],
  declarations: [
    TargetsComponent
  ],
  exports: [
    TargetsRoutingModule
  ]
})
export class TargetsModule { }
