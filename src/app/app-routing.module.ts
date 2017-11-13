import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './shared/auth-guard.service';

export const routes: Routes = [
  { path: 'login', loadChildren: 'app/login/login.module#LoginModule' },
  { path: '', loadChildren: 'app/home/home.module#HomeModule', canActivate: [AuthGuard] },
  { path: '**', loadChildren: 'app/home/home.module#HomeModule', canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}