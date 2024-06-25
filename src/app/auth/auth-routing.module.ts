import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FinalComponent } from './final/final.component';

const routes: Routes = [
    {
      path:'authentication',
      component: LoginComponent
    },
    {
      path:'registration',
      component: RegisterComponent
    },
    {
      path:'final',
      component: FinalComponent
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
