import { LinkAnalysisRoutingModule } from './link-analysis-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LinkAnalysisComponent } from './views/link-analysis.component';

@NgModule({
  imports: [
    CommonModule,
    LinkAnalysisRoutingModule
  ],
  declarations: [LinkAnalysisComponent],
  exports: [LinkAnalysisRoutingModule]
})
export class LinkAnalysisModule { }
