import { Routes } from '@angular/router';

export const TRIP_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./trip').then(c => c.Trip),
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
