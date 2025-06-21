import { Routes } from '@angular/router';
import { Login } from './UI';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: Login },
  {
    path: 'dashboard',
    loadComponent: () => import('./UI/dashboard/dashboard').then(c => c.Dashboard)
  },
  {
    path: 'trip',
    loadChildren: () => import('./UI/trip/trip.routes').then(r => r.TRIP_ROUTES)
  },
  { path: 'user', loadComponent: () => import('./UI/user/user').then(c => c.User) },
  { path: '**', redirectTo: 'dashboard' }
];
