import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SeniorPage } from './senior.page';

const routes: Routes = [
  {
    path: '',
    component: SeniorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SeniorPageRoutingModule {}
