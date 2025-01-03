// @ts-ignore

import {RouterModule, Routes} from '@angular/router';
import { AppComponent } from './app.component';
import {LoginComponent} from './pages/login/login.component';
import {RegisterComponent} from './pages/register/register.component';
import {ActivateAccountComponent} from './pages/activate-account/activate-account.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
  { path: 'login',
    component: LoginComponent
  }, // Default route leading to the AppComponent

  { path: 'register',
    component: RegisterComponent
  },

  {
    path:  'activate-account' ,
    component: ActivateAccountComponent
  },
  {
    path : 'books',
    loadChildren:( ) => import('./modules/book/book.module').then(m => m.BookModule),
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
