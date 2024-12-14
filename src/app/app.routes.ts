import { Routes } from '@angular/router';


export const routes: Routes = [
    {path: 'auth', loadChildren:()=>import('./auth/auth.module').then(auth=>auth.AuthModule)},
    {path: 'home', loadChildren:()=>import('./home/home.module').then(auth=>auth.HomeModule)},
    {path: 'page', loadChildren:()=>import('./page/page.module').then(auth=>auth.PageModule)},
    
];
