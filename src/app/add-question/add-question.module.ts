import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { IonicModule } from '@ionic/angular';

import { AddQuestionPageRoutingModule } from './add-question-routing.module';

import { AddQuestionPage } from './add-question.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    AddQuestionPageRoutingModule
  ],
  declarations: [AddQuestionPage]
})
export class AddQuestionPageModule {}
