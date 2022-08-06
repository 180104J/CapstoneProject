import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GraduatePage } from './graduate.page';

const routes: Routes = [
  {
    path: '',
    component: GraduatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GraduatePageRoutingModule {}
