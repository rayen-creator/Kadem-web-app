import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { ResetpwdComponent } from './components/auth/resetpwd/resetpwd.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { NotfoundpageComponent } from './components/notfoundpage/notfoundpage.component';
import { UnauthorizedComponent } from './components/unauthorized/unauthorized.component';
import { AuthGuard } from './core/helpers/auth.guard';


const routes: Routes = [
  // ,canActivate:[AuthGuard] 
  { path: 'backoffice', loadChildren: () => import('./components/back-office/back-office.module').then(m => m.BackOfficeModule) ,canActivate:[AuthGuard]  },
  { path: 'login', redirectTo: '', pathMatch: 'full' },
  { path: '', component: LoginComponent },
  { path: 'resetpassword', component: ResetpwdComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'unauthorized', component: UnauthorizedComponent },

  { path: '**', component: NotfoundpageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
