import { Routes } from '@angular/router';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { ClientsComponent } from './pages/clients/clients.component';
import { NewClientsComponent } from './pages/new-clients/new-clients.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/v' },
  { path: 'v', component: WelcomeComponent },
  // { path: 'v', loadChildren: () => import('./pages/welcome/welcome.routes').then(m => m.WELCOME_ROUTES) },
  { path: 'v/clients', component: ClientsComponent },
  { path: 'v/clients/new', component: NewClientsComponent },
  // { path: 'v/clients', pathMatch: 'full', loadChildren: () => import('./pages/welcome/welcome.routes').then(m => m.WELCOME_ROUTES) },
];
