import { Routes } from '@angular/router';
import { Trip } from './trip';

export const TRIP_ROUTES: Routes = [
  {
    path: '',
    component: Trip,
    children: [
      {
        path: '',
        redirectTo: 'trip-detail',
        pathMatch: 'full'
      },
      {
        path: 'trip-detail',
        loadComponent: () => import('./trip-detail/trip-detail').then(c => c.TripDetail)
      },
      {
        path: 'trip-config',
        loadComponent: () => import('./trip-config/trip-config').then(c => c.TripConfig)
      }
    ]
  }
];
