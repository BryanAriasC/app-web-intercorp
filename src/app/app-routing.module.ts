import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { ReportesComponent } from './pages/reportes/reportes.component';
import { ClienteComponent } from './pages/cliente/cliente.component';
import { PromedioEdadComponent } from './pages/reportes/promedio-edad.component';
import { DesviacionEstandarComponent } from './pages/reportes/desviacion-estandar.component';
import { ProyeccionAnalisisComponent } from './pages/reportes/proyeccion-analisis.component';
import { ClientesMuerteComponent } from './pages/reportes/clientes-muerte.component';


const routes: Routes = [
  { path: 'clientes', component: ClientesComponent },
  { path: 'cliente/:id', component: ClienteComponent },
  { path: 'reportes', component: ReportesComponent,
    children: [
      { path: 'promedio', component: PromedioEdadComponent },
      { path: 'desviacion_estandar', component: DesviacionEstandarComponent },
      { path: 'proyeccion', component: ProyeccionAnalisisComponent },
      { path: 'clientes', component: ClientesMuerteComponent },
      { path: '**', pathMatch: 'full', redirectTo: 'promedio' }
    ]    
  },
  { path: '**', pathMatch: 'full', redirectTo: 'clientes' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
