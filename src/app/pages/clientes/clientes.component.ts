import { Component, OnInit } from '@angular/core';
import { ClienteModel } from 'src/app/models/cliente.model';
import { ClientesService } from '../../services/clientes.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  clientes: Array<ClienteModel> =  [];
  cargando = false;

  constructor(private clientesService: ClientesService) {

    console.log(this.clientes);

   }

  ngOnInit() {

    this.cargando = true;
    this.clientesService.getClientes()
      .subscribe( resp => {
        this.clientes = resp;
        this.cargando = false;
      });


  }

  borrarCliente( cliente: ClienteModel, i: number ) {

    Swal.fire({
      title: '¿Está seguro?',
      text: `Está seguro de borrar al cliente ${ cliente.nombre }`,
      icon: 'question',
      showConfirmButton: true,
      showCancelButton: true
    }).then( resp => {

      if ( resp.value ) {
        this.clientes.splice(i, 1);
        this.clientesService.borrarCliente( cliente.id ).subscribe();
      }

    });



  }

}
