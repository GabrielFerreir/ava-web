import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainComponent} from "./views/main/main.component";
import {NotFoundComponent} from "./views/not-found/not-found.component";
import {LoginComponent} from "./views/auth/login/login.component";

const router: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {path: 'login', component: LoginComponent}
    ]
  },
  {
    path: 'not-found',
    component: NotFoundComponent
  },
  {
    path: '**', redirectTo: 'not-found'
  }
]


@NgModule({
  imports: [RouterModule.forRoot(router)],
  exports: [ RouterModule]
})
export class AppRoutingModule { }
