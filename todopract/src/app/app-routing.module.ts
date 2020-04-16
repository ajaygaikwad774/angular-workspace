import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { TodoComponent } from "./todo/todo.component";
import { LoginComponent } from "./login/login.component";

const routes: Routes = [
  // {path:"", redirectTo :"todos", pathMatch :"full"},
  {
    path: "login",
    children: [
      { path: "", component: LoginComponent },
      { path: "todos", component: TodoComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
