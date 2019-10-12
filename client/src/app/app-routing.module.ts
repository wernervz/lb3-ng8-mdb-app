import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UnprotectedComponent } from './unprotected/unprotected.component';
import { LoginComponent } from './auth/login/login.component';
import { ProtectedComponent } from './protected/protected.component';
import { AuthGuard } from './auth/auth.guard';
import { DemoComponent } from './protected/demo/demo.component';


const routes: Routes = [
  { path: '', pathMatch: "full", redirectTo: 'unprotected' },
  { path: 'login', component: LoginComponent},
  { path: 'unprotected', component: UnprotectedComponent },
  { path: 'protected', component: ProtectedComponent, canActivate: [ AuthGuard ], children: [
    { path: 'demo', component: DemoComponent },
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
