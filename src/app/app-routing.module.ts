import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './LandingPage/layout/layout.component';
import { MailverifyComponent } from './mailverify/mailverify.component';
import { AuthGuard } from './services/auth.guard';
import { AdminPortalComponent } from './admin-portal/admin-portal.component';
import { JwtAuthComponent } from './jwt-auth/jwt-auth.component'
import { MisComponent } from './mis/mis.component'
import { ErrorPageComponent } from './error-page/error-page.component';
const routes: Routes = [
  // { path: '', redirectTo :'index', pathMatch :'full' },
  { path: 'layout', component: LayoutComponent, canActivate: [AuthGuard] },
  {
    path: 'dashboard',
    component: MailverifyComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'jwt-auth',
    component: JwtAuthComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'mis',
    component: MisComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'error',
    component: ErrorPageComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'admin',
    component: AdminPortalComponent,
    // canActivate: [true],
    children: [
      {
        path: '',
        loadChildren: './adminpanel/adminpanel.module#AdminpanelModule',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
