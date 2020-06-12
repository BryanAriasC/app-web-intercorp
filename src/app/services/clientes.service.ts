import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ClienteModel } from '../models/cliente.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  private url = 'https://intercorp-ca021.firebaseio.com';

  constructor(private http: HttpClient) { }

  crearCliente( cliente: ClienteModel ){
  
    cliente.fecha_registro = new Date().getTime();

    const clienteTemp = {
      ...cliente
    };

    delete clienteTemp.id;

    return this.http.post(`${ this.url }/clientes.json`, clienteTemp)
    .pipe(
      map( (resp: any) => {

        cliente.id = resp.name;
        return cliente;

      })
    );

  }

  actualizarCliente(cliente: ClienteModel){
  
    const clienteTemp = {
      ...cliente
    };

    delete clienteTemp.id;

    return this.http.put(`${ this.url }/clientes/${ cliente.id }.json`, clienteTemp);

  }

  borrarCliente( id: string ) {

    return this.http.delete(`${ this.url }/clientes/${ id }.json`);

  }


  getCliente( id: string ) {

    return this.http.get(`${ this.url }/clientes/${ id }.json`);

  }


  getClientes() {
    return this.http.get(`${ this.url }/clientes.json`)
            .pipe(
              map( this.crearArray )
            );
  }

  
  private crearArray( clienteObj: object ) {

    const clientes: ClienteModel[] = [];

    Object.keys( clienteObj ).forEach( key => {

      const cliente: ClienteModel = clienteObj[key];
      cliente.id = key;

      clientes.push( cliente );
    });


    return clientes;

  }

}
