import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GraduatePageRoutingModule } from './graduate-routing.module';

import { GraduatePage } from './graduate.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GraduatePageRoutingModule
  ],
  declarations: [GraduatePage]
})
export class GraduatePageModule {}
