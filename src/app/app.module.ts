import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LogInComponent } from './components/login/log-in.component'; 
import { DeclareRoleComponent } from './components/declare_role/declare-role.component'; 
import { RegisterAbilitiesComponent } from './components/register_abilities/register-abilities.component'; 
import { RequestServiceComponent } from './components/request_service/request-service.component'; 
import { ServiceDetailsComponent } from './components/service_details/service-details.component';
import { IndexComponent } from './components/index/index.component';
import { HttpClientModule } from "@angular/common/http";
import { app_routing } from './app.routes';
import { HomeComponent } from './components/home/home.component';
import { ListProvidersComponent } from './components/list-providers/list-providers.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    DeclareRoleComponent,
    RegisterAbilitiesComponent,
    RequestServiceComponent,
    ServiceDetailsComponent,
    IndexComponent,
    HomeComponent,
    ListProvidersComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    app_routing,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
