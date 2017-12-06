import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TargetsComponent } from './views/targets.component';

const routes: Routes = [
  {
    path: '',
    component: TargetsComponent,
    data: {
      title: 'Objetivos'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TargetsRoutingModule { }
