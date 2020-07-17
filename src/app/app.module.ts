import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA  } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatSliderModule } from '@angular/material/slider';
import { AgmCoreModule } from '@agm/core';
import { CarrouselComponent } from './components/shared/carrousel/carrousel.component';
import { MapComponent } from './components/shared/map/map.component';
import { ComparatorDashboardComponent } from './components/comparator-dashboard/comparator-dashboard.component';
import { RegisterCoworkingComponent } from './components/register-coworking/register-coworking.component';


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
    CarrouselComponent,
    MapComponent,
    ComparatorDashboardComponent,
    RegisterCoworkingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    APP_ROUTING,
    BrowserAnimationsModule,
    MatSliderModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCiL4UvXT99dAEKg3Zp8fvhEqRwcTY4Ia8'
    })
  ],
  schemas:[NO_ERRORS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
