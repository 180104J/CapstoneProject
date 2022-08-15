import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SeniorPageRoutingModule } from './senior-routing.module';

import { SeniorPage } from './senior.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SeniorPageRoutingModule
  ],
  declarations: [SeniorPage]
})
export class SeniorPageModule {}
