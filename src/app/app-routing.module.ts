import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from "./pages/login/login.component";
import { RegisterComponent } from "./pages/register/register.component";
import { AppComponent } from "./app.component";
import { UsersComponent } from './pages/users/users.component';
import { AdminpanelComponent } from './pages/adminpanel/adminpanel.component';


const routes: Routes  = [
  { path: "", component: LoginComponent, pathMatch: "full" },
  { path: "public/login", component: LoginComponent, pathMatch: "full" },
  { path: "public/register", component: RegisterComponent, pathMatch: "full" },
  { path: "private/users", component: UsersComponent, pathMatch: "full" },
  { path: "private/adminpanel", component: AdminpanelComponent, pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
