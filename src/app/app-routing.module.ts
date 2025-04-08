import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';

const routes: Routes = [
  { path: 'login', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)},
  { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) }, // ✅ Corrección aquí
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })], // enableTracing para depuración
  exports: [RouterModule]
})
export class AppRoutingModule { }
