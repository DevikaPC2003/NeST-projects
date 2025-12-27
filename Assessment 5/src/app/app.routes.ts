import { Routes } from '@angular/router';
import { Customer } from './customer/customer';
import { About } from './about/about';
import { Home } from './home/home';

export const routes: Routes = [
    {path:'customer', component:Customer },
    {path:'about', component:About},
    {path:'', component:Home}
];
