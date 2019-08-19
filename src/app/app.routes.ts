import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CoworkingsComponent } from './components/coworkings/coworkings.component';

const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'coworkings', component: CoworkingsComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);