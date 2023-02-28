import { RequestProductResolver } from './core/resolvers/request-product.resolver';
import { ExitGuard } from './core/guards/exit.guard';
import { AuthGuard } from './core/guards/auth.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExampleComponent } from './example/example.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'plate',
    loadChildren: () => import('./pages/plates-list/plates-list.module').then(m => m.PlatesListModule)
  },
  {
    path: 'detail/:id',
    loadChildren: () => import('./pages/detail/detail.module').then(m => m.DetailModule),
    resolve: [RequestProductResolver]
  },
  {
    path: 'create-plates',
    loadChildren: () => import('./pages/plates-create/plates-create.module').then(m => m.PlatesCreateModule),
    // canActivate: [AuthGuard]
    // APlicamos la guardia canDeactivate.
    canDeactivate: [ExitGuard]
  },
  {
   path: 'login',
   loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'account',
    loadChildren: () => import('./pages/account/account.module').then(m => m.AccountModule),
    // Le podemos aplicar la guardia a cualquier ruta.
    // canActivate: [AuthGuard],
    
  },
  {
    path: 'example',
    component: ExampleComponent
  },
  {
    path: '**',
    loadChildren: () => import('./pages/not-found/not-found.module').then(m => m.NotFoundModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
