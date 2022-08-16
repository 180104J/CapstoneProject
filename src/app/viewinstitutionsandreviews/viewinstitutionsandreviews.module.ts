import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewinstitutionsandreviewsPageRoutingModule } from './viewinstitutionsandreviews-routing.module';

import { ViewinstitutionsandreviewsPage } from './viewinstitutionsandreviews.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewinstitutionsandreviewsPageRoutingModule
  ],
  declarations: [ViewinstitutionsandreviewsPage]
})
export class ViewinstitutionsandreviewsPageModule {}
