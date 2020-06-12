import { Component, OnInit } from '@angular/core';
import { ClientesService } from 'src/app/services/clientes.service';
import { ClienteModel } from 'src/app/models/cliente.model';

@Component({
  selector: 'app-desviacion-estandar',
  templateUrl: './desviacion-estandar.component.html',
  styles: []
})
export class DesviacionEstandarComponent implements OnInit {

  // clientes: Array<ClienteModel> =  [];

  resultado: string = "0";

  edades: Array<any> = [];

  constructor(private clientesService: ClientesService) { }

  ngOnInit() {

    this.clientesService.getClientes()
      .subscribe( resp => {
        // this.clientes = resp;
  
        // console.log(this.clientes);

        resp.forEach(elm => {
          this.edades.push(elm.edad);
        });
        
        console.log(this.edades);

        let sumedades = this.edades.reduce((a, b) => a + b, 0);
        let param1 = sumedades / this.edades.length;

        // console.log(param1);

        let arrCal = [];
        this.edades.forEach(elm => {
          arrCal.push( Math.pow( elm-param1,2) );
            //Math.sqrt(Math.abs(elm - p1))
        });

        // console.log(arr2);
      
        let summed = arrCal.reduce((a, b) => a + b, 0);
        let param2 = summed / this.edades.length;
    
        let resEst = Math.sqrt(param2);

        this.resultado = resEst.toFixed(2);

        console.log(resEst);
     


      });
  
  }

}
