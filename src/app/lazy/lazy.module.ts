import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { CommonModule } from '@angular/common';
import { LazyComponent } from './lazy/lazy.component';
import { CountService } from '../shared/count.service';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  {
    path: "",
    component: LazyComponent
  }
]
@NgModule({
  declarations: [
    LazyComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class LazyModule { }
