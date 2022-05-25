import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { AuthGuard } from './auth.guard';

export const routes: Routes = [
  {
    path: 'about',
    loadChildren: () =>
      import('@challenge-registry/web/about').then((m) => m.AboutModule),
  },
  {
    path: 'challenges',
    loadChildren: () =>
      import('@challenge-registry/web/challenge-search').then(
        (m) => m.ChallengeSearchModule
      ),
  },
  {
    path: 'orgs',
    loadChildren: () =>
      import('@challenge-registry/web/org-search').then(
        (m) => m.OrgSearchModule
      ),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('@challenge-registry/web/login').then((m) => m.LoginModule),
  },
  {
    path: 'signup',
    loadChildren: () =>
      import('@challenge-registry/web/signup').then((m) => m.SignupModule),
  },
  {
    path: 'org/:login/:challenge',
    loadChildren: () =>
      import('@challenge-registry/web/challenge').then(
        (m) => m.ChallengeModule
      ),
  },
  {
    path: 'org/:login',
    loadChildren: () =>
      import('@challenge-registry/web/org-profile').then(
        (m) => m.OrgProfileModule
      ),
  },
  {
    path: 'not-found',
    loadChildren: () =>
      import('@challenge-registry/web/not-found').then((m) => m.NotFoundModule),
  },
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () =>
      import('@challenge-registry/web/home').then((m) => m.HomeModule),
    // canActivate: [AuthGuard],
  },
  {
    path: ':login',
    loadChildren: () =>
      import('@challenge-registry/web/user-profile').then(
        (m) => m.UserProfileModule
      ),
  },
  {
    path: '**',
    redirectTo: '/not-found',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { initialNavigation: 'enabledBlocking' }),
  ],
  declarations: [],
  providers: [],
  exports: [RouterModule],
})
export class AppRoutingModule {}
