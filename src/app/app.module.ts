import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule} from "@angular/forms";
import { LoginComponent } from "./auth/login/login.component";
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';


// PAGES COMPONENTS
import { HomeComponent } from "./pages/home/home.component";
import { ContactComponent } from "./pages/contact/contact.component";
import { BlogComponent } from "./pages/blog/blog.component";

// ADMINISTRATOR BACKOFFICE COMPONENTS
import { HomeAdminComponent } from "./admin/home/home.component";
import { BlogsAdminComponent } from "./admin/blogs/blogs.component";
import { BlogAdminComponent } from "./admin/blog/blog.component";
import { UsersAdminComponent } from "./admin/users/users.component";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    BlogComponent,
    LoginComponent,
    HomeAdminComponent,
    BlogsAdminComponent,
    BlogAdminComponent,
    UsersAdminComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatTableModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
