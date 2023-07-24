import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {Router, RouterModule, Routes} from "@angular/router";
import { SessionsComponent } from './sessions/sessions.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatGridListModule} from '@angular/material/grid-list';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from "@angular/common/http";



const routes: Routes = [
  {path:'sessions',component:SessionsComponent},
  {path:'dashboard',component:DashboardComponent},
  {path: 'login',component:LoginComponent},
  {path:'**',redirectTo:'/dashboard'}

]

@NgModule({
  declarations: [
    AppComponent,
    SessionsComponent,
    DashboardComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
      MatGridListModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
