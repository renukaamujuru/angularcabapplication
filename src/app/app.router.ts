import { DashboardModule } from './modules/dashboard.module';
import { HomePageModule} from './modules/homePage.module';
import { AuthModule} from './modules/auth.module';
 import {Routes,RouterModule} from '@angular/router';
// import { ModuleWithProviers} from '@angular/core';

export const routes:Routes=[
{ path: '', loadChildren: './modules/homePage.module#HomePageModule'},
{ path: 'home', loadChildren: './modules/homePage.module#HomePageModule'},
{ path: 'auth', loadChildren: './modules/auth.module#AuthModule'},
{path:'dashboard',loadChildren:'./modules/dashboard.module#DashboardModule'}
];
export const approutes: any=RouterModule.forRoot(routes, { useHash: true });