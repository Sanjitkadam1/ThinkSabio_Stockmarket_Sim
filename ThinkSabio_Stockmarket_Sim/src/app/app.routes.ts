import { provideRouter, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ApplicationConfig } from '@angular/core';


const routes: Routes = [
  { path: 'home-component', component: HomeComponent },
  { path: 'login-component', component: LoginComponent },
];


// export const appConfig: ApplicationConfig = {
//   providers: [provideRouter(routes)]
// };

