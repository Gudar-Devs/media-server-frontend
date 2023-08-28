import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollectionsComponent } from './collections.component';
import { Route, RouterModule } from '@angular/router';


const collections: Route[] =[
  {
    path: '',
    component: CollectionsComponent,
  }
]

@NgModule({
  declarations: [
    CollectionsComponent
  ],
  imports: [
    RouterModule.forChild(collections),
    CommonModule
  ]
})
export class CollectionsModule { }
