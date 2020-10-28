import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CeleLayoutCompactComponent } from './shared/components/layouts/cele-layout-compact/cele-layout-compact.component';

const routesConfig: Routes = [
  {
    path: 'product-list',
    loadChildren: () => import('./views/product-list/product-list.module').then(m => m.ProductListModule)
  },
  {
    path: 'user-profile',
    loadChildren: () => import('./views/user-profile/user-profile.module').then(m => m.UserProfileModule)
  }
];

const routes: Routes = [
  {
    path: '',
    redirectTo: 'product-list',
    pathMatch: 'full'
  },
  {
    path: '',
    component: CeleLayoutCompactComponent,
    //canActivate: [AuthGaurd],
    children: routesConfig
  },
  {
    path: '**',
    redirectTo: 'others/404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  //imports: [RouterModule.forRoot(routes, { useHash: true, enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
