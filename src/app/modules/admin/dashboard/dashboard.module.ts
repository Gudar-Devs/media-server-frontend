import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { Route, RouterModule } from '@angular/router';

const dashboard: Route[] =[
  {
    path: '',
    component: DashboardComponent,
  }
]

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    RouterModule.forChild(dashboard),
    CommonModule
  ]
})
export class DashboardModule { }
