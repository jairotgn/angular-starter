import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { FormsModule, ReactiveFormsModule} from "@angular/forms";
import { LoginComponent } from "./components/login/login.component";
import { BlogsAdminComponent } from "./components/blogs/blogs.component";
import { UsersComponent } from "./components/users/users.component";
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from "./pages/home/home.component";
import { ContactComponent } from "./pages/contact/contact.component";


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BlogsAdminComponent,
    UsersComponent,
    HomeComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatGridListModule,
    FormsModule,

    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
