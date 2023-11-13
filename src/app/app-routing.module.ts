import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'error404',
    loadChildren: () => import('./error404/error404.module').then( m => m.Error404PageModule)
  },
  {
    path: 'user-registration',
    loadChildren: () => import('./user-registration/user-registration.module').then( m => m.UserRegistrationPageModule)
  },
 // Ruta para manejar 404
 { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule) },
 { path: '', redirectTo: 'login', pathMatch: 'full' },

 {
  path: 'login-alternativo',
  loadChildren: () => import('./login-alternativo/login-alternativo.module').then( m => m.LoginAlternativoPageModule)
  },

  { 
    path: 'not-found', 
    loadChildren: () => import('./error404/error404.module').then(m => m.Error404PageModule) 
  },
  
  { 
    path: '**', 
    redirectTo: '/not-found' 
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
