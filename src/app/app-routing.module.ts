import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// PAGES COMPONENTS
import { HomeComponent } from './pages/home/home.component';
import { BlogComponent } from './pages/blog/blog.component';
import { ContactComponent } from './pages/contact/contact.component';
import { LoginComponent } from './components/login/login.component';

// ADMIN COMPONENTS
import { HomeAdminComponent } from './admin/home/home.component';
import { BlogsAdminComponent } from './admin/blogs/blogs.component';
import { UsersAdminComponent } from './admin/users/users.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'login', component: LoginComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'admin', component: HomeAdminComponent },
  { path: 'admin/blogs', component: BlogsAdminComponent },
  { path: 'admin/users', component: UsersAdminComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
