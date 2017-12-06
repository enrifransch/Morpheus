import { LinkAnalysisComponent } from './views/link-analysis.component';
import { NgModule } from '@angular/core';
import { Routes,
     RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: LinkAnalysisComponent,
    data: {
      title: 'Análisis de vínculos'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LinkAnalysisRoutingModule {}
