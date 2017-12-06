import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Containers
import {
  FullLayoutComponent,
  SimpleLayoutComponent
} from './modules/core/containers';

export const routes: Routes = [
  {
    path: '',
    component: FullLayoutComponent,
    data: {
      title: 'Inicio'
    },
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full'},
      { path: 'dashboard', loadChildren: './modules/dashboard/dashboard.module#DashboardModule'},
      { path: 'sabanas', loadChildren: './modules/sabanas/sabanas.module#SabanasModule' },
      { path: 'targets', loadChildren: './modules/targets/targets.module#TargetsModule' },
      { path: 'map', loadChildren: './modules/map/map.module#MapModule' },
      { path: 'link_analysis', loadChildren: './modules/link-analysis/link-analysis.module#LinkAnalysisModule' }
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
