import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CoworkingsComponent } from './components/coworkings/coworkings.component';
import { AlgorythmComponent } from './components/algorythm/algorythm.component';
import { CoworkingComponent } from './components/coworking/coworking.component';
import { ComparatorDashboardComponent } from './components/comparator-dashboard/comparator-dashboard.component';
import { RegisterCoworkingComponent } from './components/register-coworking/register-coworking.component';

const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'coworkings', component: CoworkingsComponent },
    { path: 'algorythm', component: AlgorythmComponent },
    { path: 'register-coworking', component: RegisterCoworkingComponent },
    { path: 'coworking/:id', component: CoworkingComponent },
    { path: 'compare', component: ComparatorDashboardComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);