import { Component, OnInit } from '@angular/core';
import { ClientesService } from 'src/app/services/clientes.service';
import { ClienteModel } from 'src/app/models/cliente.model';

@Component({
  selector: 'app-promedio-edad',
  templateUrl: './promedio-edad.component.html',
  styles: []
})
export class PromedioEdadComponent implements OnInit {

  clientes: Array<ClienteModel> =  [];

  resultado: string = "0";

  constructor(private clientesService: ClientesService) { }

  ngOnInit() {

    this.clientesService.getClientes()
      .subscribe( resp => {
        this.clientes = resp;
  
        console.log(this.clientes);

        let sumEdades = this.clientes.reduce(function(acum, sigVal){
          return {
            edad: acum.edad + sigVal.edad
          };
        }, {edad: 0});

        let avgEdad = sumEdades.edad / this.clientes.length;

        console.log(avgEdad);

        this.resultado = avgEdad.toFixed(0);

      });
  
  }

}
