import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { registerLocaleData } from '@angular/common';
import localEs  from '@angular/common/locales/es';

registerLocaleData(localEs);

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { ClienteComponent } from './pages/cliente/cliente.component';
import { ReportesComponent } from './pages/reportes/reportes.component';
import { PromedioEdadComponent } from './pages/reportes/promedio-edad.component';
import { DesviacionEstandarComponent } from './pages/reportes/desviacion-estandar.component';
import { ProyeccionAnalisisComponent } from './pages/reportes/proyeccion-analisis.component';
import { ClientesMuerteComponent } from './pages/reportes/clientes-muerte.component';
import { CapitalizadoPipe } from './pipes/capitalizado.pipe';
import { FormatdatePipe } from './pipes/formatdate.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ClientesComponent,
    ClienteComponent,
    ReportesComponent,
    PromedioEdadComponent,
    DesviacionEstandarComponent,
    ProyeccionAnalisisComponent,
    ClientesMuerteComponent,
    CapitalizadoPipe,
    FormatdatePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'es'
     }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
