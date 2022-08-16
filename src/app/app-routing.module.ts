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
  {
    path: 'add-comment',
    loadChildren: () => import('./add-comment/add-comment.module').then( m => m.AddCommentPageModule)
  },
  {
    path: 'institutions',
    loadChildren: () => import('./institutions/institutions.module').then( m => m.InstitutionsPageModule)
  },
  {
    path: 'reviews',
    loadChildren: () => import('./reviews/reviews.module').then( m => m.ReviewsPageModule)
  },
  {
    path: 'viewinstitutionsandreviews',
    loadChildren: () => import('./viewinstitutionsandreviews/viewinstitutionsandreviews.module').then( m => m.ViewinstitutionsandreviewsPageModule)
  },

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
