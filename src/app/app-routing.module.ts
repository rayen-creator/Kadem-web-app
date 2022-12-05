import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { ResetpwdComponent } from './components/auth/resetpwd/resetpwd.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { NotfoundpageComponent } from './components/notfoundpage/notfoundpage.component';
import { UnauthorizedComponent } from './components/unauthorized/unauthorized.component';
import { AuthGuard } from './core/helpers/auth.guard';
import { UnsavedChangesGuard } from './core/helpers/unsaved-changes.guard';

const routes: Routes = [

  { path: 'backoffice', loadChildren: () => import('./components/back-office/back-office.module').then(m => m.BackOfficeModule), canActivate: [AuthGuard] },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'resetpassword', component: ResetpwdComponent },
<<<<<<< HEAD
  { path: 'signup', component: SignupComponent, canDeactivate: [UnsavedChangesGuard] },
  { path: 'unauthorized', component: UnauthorizedComponent },
=======
  { path: 'signup', component: SignupComponent },
  { path: 'class', loadChildren: () => import('./components/back-office/class/class.module').then(m => m.ClassModule) },
>>>>>>> Professeur

  { path: '**', component: NotfoundpageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
