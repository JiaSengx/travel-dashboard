import { Routes } from '@angular/router';
import { Login, Dashboard, User } from './UI';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: Login },
  { path: 'dashboard', component: Dashboard },
  {
    path: 'trip',
    loadChildren: () => import('../app/UI/trip/trip.routes').then(r => r.TRIP_ROUTES)
  },
  { path: 'user', component: User }
];
