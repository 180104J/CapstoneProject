import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewinstitutionsandreviewsPage } from './viewinstitutionsandreviews.page';

const routes: Routes = [
  {
    path: '',
    component: ViewinstitutionsandreviewsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewinstitutionsandreviewsPageRoutingModule {}
