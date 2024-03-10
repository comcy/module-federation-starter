import { Routes } from '@angular/router';

const routes: Routes = [
    { path: 'home', loadChildren: () => import('home-app/HomeModule').then(m => m.HomeModule) },
    { path: 'profile', loadChildren: () => import('profile-app/ProfileModule').then(m => m.ProfileModule) }
];
