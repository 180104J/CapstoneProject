import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'add-question',
    loadChildren: () => import('./add-question/add-question.module').then( m => m.AddQuestionPageModule)
  },
  {
    path: 'graduate',
    loadChildren: () => import('./graduate/graduate.module').then( m => m.GraduatePageModule)
  },
  {
    path: 'senior',
    loadChildren: () => import('./senior/senior.module').then( m => m.SeniorPageModule)
  },
  {
    path: 'edit-question/:questionID',
    loadChildren: () => import('./edit-question/edit-question.module').then( m => m.EditQuestionPageModule)
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
