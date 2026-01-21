import { Routes } from '@angular/router';
import { Post } from './post/post';
import { About } from './about/about';
import { Home } from './home/home';

export const routes: Routes = [
    { path: 'post', component: Post },
    { path: 'about', component: About },
    { path: '', component: Home }
];
