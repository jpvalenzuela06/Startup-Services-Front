import { RouterModule, Routes } from "@angular/router"; 
import { HomeComponent } from "./components/home/home.component";
import { IndexComponent } from "./components/index/index.component";
import { LogInComponent } from "./components/login/log-in.component"; 
import { RegisterAbilitiesComponent } from "./components/register_abilities/register-abilities.component";
import { RequestServiceComponent } from "./components/request_service/request-service.component";
import { SignUpComponent } from "./components/sign-up/sign-up.component";



const app_routes: Routes = [
    { path: '', component: HomeComponent }, 
    { path: 'login', component: LogInComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home'},
    { path: 'registerAbilities', component: RegisterAbilitiesComponent },
    { path: 'signUp', component: SignUpComponent },
    { path: 'request_service', component: RequestServiceComponent },
];

export const app_routing = RouterModule.forRoot(app_routes);