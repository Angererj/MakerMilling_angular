import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {RouterModule, Routes} from "@angular/router";
import {SessionsComponent} from './sessions/sessions.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatGridListModule} from '@angular/material/grid-list';
import {LoginComponent} from './login/login.component';
import {ReactiveFormsModule} from '@angular/forms';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from "@angular/common/http";
import {AuthGuard} from "./auth.guard";
import {HeaderComponent} from './header/header.component';
import {PopupComponent} from './popup/popup.component';


const routes: Routes = [
  {path: 'sessions', component: SessionsComponent, canActivate: [AuthGuard]},
  {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent},
  {path: '**', redirectTo: '/login'}
]

@NgModule({
  declarations: [
    AppComponent,
    SessionsComponent,
    DashboardComponent,
    LoginComponent,
    HeaderComponent,
    PopupComponent,
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
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {
}
