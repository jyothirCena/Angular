import { Routes } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ServicesListComponent } from './services-list/services-list.component';
import { DeleteComponent } from './delete/delete.component';
import { ProfileComponent } from './profile/profile.component';
import { BookingComponent } from './booking/booking.component';

export const routes: Routes = [
    {path: 'register',component: CustomerComponent},
    {path: 'login', component: LoginComponent},
    {path: 'home', component: HomeComponent},
    {path: 'services', component: ServicesListComponent},
    {path: 'update/:id', component: CustomerComponent},
    {path: 'delete', component: DeleteComponent},
    {path: 'profile', component: ProfileComponent},
    {path: 'bookings', component: BookingComponent},
    {path: '',redirectTo: 'login',pathMatch: 'full'}
];
