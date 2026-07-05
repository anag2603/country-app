import { Routes } from '@angular/router';
import { ByCapitalPage } from './pages/by-capital-page/by-capital-page';
import { CountryLayout } from './layouts/country-layout/country-layout';

export const countryRoutes: Routes = [
  {
    path: '',
    component: CountryLayout,
    children: [
      {
        path: 'by-capital',
        component: ByCapitalPage,
      },
    ],
  },

   // {
     //path: 'country',
     //loadChildren: () => import('./country.routes').then((m) => m.countryRoutes),
    //},

    {
     path: '**',
     redirectTo: 'by-capital',
    }
];

export default countryRoutes;