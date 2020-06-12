import { Component, OnInit } from '@angular/core';
import { ClientesService } from 'src/app/services/clientes.service';
import { ClienteModel } from 'src/app/models/cliente.model';

@Component({
  selector: 'app-proyeccion-analisis',
  templateUrl: './proyeccion-analisis.component.html',
  styles: []
})
export class ProyeccionAnalisisComponent implements OnInit {
  
  tot_clientes : number = 0;
  fecha_actual : Date = new Date();
  tot_clientes_new: number = 0;
  tot_happy_mes: number = 0;
  arr_prom_mes : Array<any> = [];

  clientesHappy : Array<ClienteModel> = [];
  clientesNew : Array<ClienteModel> = [];

  constructor(private clientesService: ClientesService) { }

  ngOnInit() {
  
  
    this.clientesService.getClientes()
      .subscribe( resp => {

        this.tot_clientes = resp.length;
        

        this.clientesHappy = resp.filter( cliente => {
        return ( new Date(Date.parse(cliente.fecha_nacimiento)).getMonth() === this.fecha_actual.getMonth() );
        } );

        this.tot_happy_mes = this.clientesHappy.length;
        
        this.clientesNew = resp.filter( cliente => {

            let fR = new Date(cliente.fecha_registro);
            let dd = this.addZero(fR.getDate());
            let mm = this.addZero(fR.getMonth()+1);
            let yyyy = fR.getFullYear();
            
            let fechaReg = yyyy+'-'+mm+'-'+dd;
    
            // console.log(fechaReg);
    
            let ddA = this.addZero((this.fecha_actual.getDate()));
            let mmA = this.addZero((this.fecha_actual.getMonth()+1));
            let yyyyA = this.fecha_actual.getFullYear();
            let fechaAct = yyyyA+'-'+mmA+'-'+ddA;
    
            // console.log(fechaAct);

            return  fechaReg === fechaAct;


        } );
          
        this.tot_clientes_new = this.clientesNew.length;
        console.log(this.clientesNew);

        let anio: number = 2020;
        //Calcular promedio de registro de clientes por mes/año
        

        let mesesStr: Array<any> = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Setiembre','Noviembre','Diciembre'];
        let arrMes : Array<any> = [];

        for (let i = 1; i <= new Date().getMonth() + 1 ; i++) {
          
          let datames = resp.filter( cliente => {
          
            let fm = new Date(cliente.fecha_registro).getMonth() + 1; 
            let fa = new Date(cliente.fecha_registro).getFullYear(); 
            
            if(fa === anio){
             if(fm === i){
                return true;
             }else{
               return false;
             } 
            }else{
              return false;
            }
  
          });

          arrMes.push({'mes': mesesStr[i-1] , 'cont' : datames.length });

        }

        console.log(arrMes);
        this.arr_prom_mes = arrMes;
        
    


      });

  }

  addZero(i:number) {
      let res : string;
      if (i < 10) {
        res = '0' + i;
      }
      return res;
  }

}
