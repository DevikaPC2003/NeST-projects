import { Routes } from '@angular/router';
import { Product } from './product/product';
import { Home } from './home/home';
import { Contact } from './contact/contact';
import { About } from './about/about';
import { Singleviewlist } from './singleviewlist/singleviewlist';

export const routes: Routes = [

    {path:'product',component:Product },
    {path:'about',component:About },
    {path:'contact',component:Contact },
    {path:'singleviewlist/:titleid', component:Singleviewlist},
    {path:'',component:Home }

];
