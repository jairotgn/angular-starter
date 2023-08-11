import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// GUARD
import { AuthGuard } from './auth/guard/auth.guard';

// PAGES COMPONENTS
import { HomeComponent } from './pages/home/home.component';
import { BlogComponent } from './pages/blog/blog.component';
import { ContactComponent } from './pages/contact/contact.component';
import { LoginComponent } from './auth/login/login.component';

// ADMIN COMPONENTS
import { HomeAdminComponent } from './admin/home/home.component';
import { BlogsAdminComponent } from './admin/blogs/blogs.component';
import { BlogAdminComponent } from './admin/blog/blog.component';
import { UsersAdminComponent } from './admin/users/users.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'login', component: LoginComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'admin', component: HomeAdminComponent, canActivate: [AuthGuard] },
  { path: 'admin/blogs', component: BlogsAdminComponent, canActivate: [AuthGuard] },
  { path: 'admin/blog/:id', component: BlogAdminComponent, canActivate: [AuthGuard] },
  { path: 'admin/users', component: UsersAdminComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
