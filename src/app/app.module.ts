import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
