import { MapRoutingModule } from './map-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapComponent } from './views/map.component';

@NgModule({
  imports: [
    CommonModule,
    MapRoutingModule
  ],
  declarations: [MapComponent],
  exports: [
    MapRoutingModule
  ]
})
export class MapModule { }
