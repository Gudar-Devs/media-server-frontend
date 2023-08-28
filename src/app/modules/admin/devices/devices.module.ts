import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DevicesComponent } from './devices.component';
import { Route, RouterModule } from '@angular/router';


const devices: Route[] =[
  {
    path: '',
    component: DevicesComponent,
  }
]

@NgModule({
  declarations: [
    DevicesComponent
  ],
  imports: [
    RouterModule.forChild(devices),
    CommonModule
  ]
})
export class DevicesModule { }
