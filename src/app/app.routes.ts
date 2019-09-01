import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CoworkingsComponent } from './components/coworkings/coworkings.component';
import { AlgorythmComponent } from './components/algorythm/algorythm.component';
import { CoworkingComponent } from './components/coworking/coworking.component';

const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'coworkings', component: CoworkingsComponent },
    { path: 'algorythm', component: AlgorythmComponent },
    { path: 'coworking/:id', component: CoworkingComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);