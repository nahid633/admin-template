import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LayoutComponent} from './core/layout/layout.component';


const routes: Routes = [
  {
    path: '', component: LayoutComponent, children: [
      {path: '', redirectTo: 'horizontal-timeline', pathMatch: 'full'},
      {
        path: 'horizontal-timeline',
        loadChildren: () => import('./pages/horizontal-timeline/horizontal-timeline.module').then(horizontalTimeline => horizontalTimeline.HorizontalTimelineModule)
      },
      {
        path: 'vertical-timeline',
        loadChildren: () => import('./pages/vertical-timeline/vertical-timeline.module').then(verticalTimeline => verticalTimeline.VerticalTimelineModule)
      },
      {path: 'login', loadChildren: () => import('./pages/login/login.module').then(login => login.LoginModule)},
      {path: 'register', loadChildren: () => import('./pages/register/register.module').then(register => register.RegisterModule)},
      {
        path: 'forgot-password',
        loadChildren: () => import('./pages/forgot-password/forgot-password.module').then(forgotPassword => forgotPassword.ForgotPasswordModule)
      },
      {path: '**', loadChildren: () => import('./pages/error/error.module').then(error => error.ErrorModule)}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
