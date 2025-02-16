import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserDetailsComponent } from './pages/user-details/user-details.component';
import { UserListComponent } from './pages/user-list/user-list.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'users',
    component: UserListComponent,
  },
  {
    path: 'users-details',
    component: UserDetailsComponent,
  },

  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
    component: HomeComponent,
  },
];
