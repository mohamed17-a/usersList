import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Route } from '@angular/router';
import { AppComponent } from './app/app.component';
import { UserListComponent } from '../src/app/Components/user-list/user-list.component';
import { UserDetailComponent } from '../src/app/Components/user-detail/user-detail.component';
import { provideHttpClient } from '@angular/common/http';
import { appConfig } from './app/app.config';

const routes: Route[] = [
  { path: '', component: UserListComponent },
  { path: 'user/:id', component: UserDetailComponent }
];

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideHttpClient()
  ]
}).catch((err) => console.error(err));
