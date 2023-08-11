import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { FormsModule, ReactiveFormsModule} from "@angular/forms";
import { LoginComponent } from "./components/login/login.component";
import { HttpClientModule } from '@angular/common/http';

// PAGES COMPONENTS
import { HomeComponent } from "./pages/home/home.component";
import { ContactComponent } from "./pages/contact/contact.component";

// ADMINISTRATOR BACKOFFICE COMPONENTS
import { HomeAdminComponent } from "./admin/home/home.component";
import { BlogsAdminComponent } from "./admin/blogs/blogs.component";
import { UsersAdminComponent } from "./admin/users/users.component";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    LoginComponent,
    HomeAdminComponent,
    BlogsAdminComponent,
    UsersAdminComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatGridListModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
