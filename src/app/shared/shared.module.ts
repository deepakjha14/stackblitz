import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountService } from './count.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [CountService]
})
export class SharedModule { 
  // static forRoot(): ModuleWithProviders<SharedModule> {
  //   return {
  //     ngModule: SharedModule,
  //     providers: [CountService]
  //   }
  // }
}
