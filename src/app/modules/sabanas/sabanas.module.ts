import { SabanasRoutingModule } from './sabanas-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SabanasComponent } from './views/sabanas.component';

@NgModule({
  imports: [
    CommonModule,
    SabanasRoutingModule
  ],
  declarations: [SabanasComponent],
  exports: [
    SabanasRoutingModule
  ]
})
export class SabanasModule { }
