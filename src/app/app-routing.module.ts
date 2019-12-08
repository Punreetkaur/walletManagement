import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaymentsModule } from './modules/payments/payments.module';


const routes: Routes = [
  {
    path: 'payments',
    loadChildren: './modules/payments/payments.module#PaymentsModule',
  },
  { path: '**', redirectTo: '/payments' },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/payments'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routing: ModuleWithProviders = RouterModule.forRoot(routes);

