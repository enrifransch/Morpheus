import { SabanasComponent } from './views/sabanas.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: SabanasComponent,
    data: {
      title: 'Sábanas'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SabanasRoutingModule { }
