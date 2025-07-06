import { Routes } from '@angular/router';
import { CreateCustomerComponent } from './create-customer/create-customer.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {path: 'register',component: CreateCustomerComponent},
    {path: 'login', component: LoginComponent},
    {path: 'home', component: HomeComponent},
    {path: '',redirectTo: 'login',pathMatch: 'full'}
];
