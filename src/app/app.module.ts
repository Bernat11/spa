import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA  } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppRoutingModule } from './app-routing.module';

// Rutas
import { APP_ROUTING } from './app.routes';

// Servicios

// Componentes
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { MediaComponent } from './components/shared/media/media.component';
import { ComparatorComponent } from './components/comparator/comparator.component';
import { CoworkingsComponent } from './components/coworkings/coworkings.component';
import { CoworkingComponent } from './components/coworking/coworking.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { AlgorythmComponent } from './components/algorythm/algorythm.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    MediaComponent,
    ComparatorComponent,
    CoworkingsComponent,
    FooterComponent,
    CoworkingComponent,
    AlgorythmComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    APP_ROUTING
  ],
  schemas:[NO_ERRORS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
