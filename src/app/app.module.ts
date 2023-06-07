import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PendientesModule } from './pages/pendientes/pendientes.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PendientesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
