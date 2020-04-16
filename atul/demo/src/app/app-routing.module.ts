import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { TodolistComponent } from './todolist/todolist.component';
import { ErrorComponent } from './error/error.component';


const routes: Routes = [

  {path:"" , component:LoginComponent},
  {path:"welcome/:name",component:WelcomeComponent},
  {path:"",component:TodolistComponent},
  {path:"**",component:ErrorComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
