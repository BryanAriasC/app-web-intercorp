import { Component, OnInit, ViewChild } from '@angular/core';

import { ClienteModel } from 'src/app/models/cliente.model';
import { ActivatedRoute } from '@angular/router';
import { ClientesService } from 'src/app/services/clientes.service';

import { Observable } from 'rxjs';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  forma: FormGroup;

  cliente: ClienteModel = new ClienteModel();
  

  constructor(private clientesService: ClientesService,
              private route: ActivatedRoute,
              private fb: FormBuilder) { 

      this.crearFormulario();
      this.crearListeners();
  
  }

  ngOnInit() {

    const id = this.route.snapshot.paramMap.get('id');

    if ( id !== 'nuevo' ) {

      this.clientesService.getCliente( id )
        .subscribe( (resp: ClienteModel) => {
          this.cliente = resp;
          this.cliente.id = id;
          
          this.cargarDataAlFormulario(this.cliente);

        });

    }


  }

  get nombreNoValido(){
    return this.forma.get('nombre').invalid && this.forma.get('nombre').touched;
  }

  get apellidoNoValido(){
    return this.forma.get('apellido').invalid && this.forma.get('apellido').touched;
  }

  get fechaNacimientoNoValido(){
    return this.forma.get('fecha_nacimiento').invalid && this.forma.get('fecha_nacimiento').touched;
  }
  
  get edadNoValido(){
    return this.forma.get('edad').invalid && this.forma.get('edad').touched;
  }

  crearFormulario(){
    this.forma = this.fb.group({
      id                : [''],
      nombre            : ['', [Validators.required,Validators.minLength(2)] ],
      apellido          : ['', [Validators.required ] ],
      fecha_nacimiento  : ['', [Validators.required ] ],
      edad              : ['', [Validators.required ] ]
    });
  }

  cargarDataAlFormulario(cliente: ClienteModel){

    console.log(cliente);

    // this.forma.setValue({
    this.forma.reset(cliente);

    // ['Comer','Dormir'].forEach(valor => {
    //   return this.pasatiempos.push( this.fb.control(valor) );
    // });
  }

  crearListeners(){

    // this.forma.valueChanges.subscribe( valor => {
    //   console.log(valor);
    // });

    // this.forma.statusChanges.subscribe( status => console.log({status}) );

    this.forma.get('fecha_nacimiento').valueChanges.subscribe( fecha => {
  
          console.log("change date");
          console.log(fecha);
    
          //convertir


          var hoy = new Date();
          var cumpleanos = new Date(fecha);
          var edad = hoy.getFullYear() - cumpleanos.getFullYear();
          var m = hoy.getMonth() - cumpleanos.getMonth();
      
          if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())) {
              edad--;
          }
      
          this.forma.get('edad').setValue(edad);



    } );

  }

  guardarCliente() {

    
    if ( this.forma.invalid ) {

      Object.values(this.forma.controls).forEach( control => {
          control.markAsTouched();
      });
      // console.log('Formulario no válido');
      return;
    }


    console.log("ID");
    console.log(this.forma.value);
  
    this.cliente = this.forma.value;


    Swal.fire({
      title: 'Espere',
      text: 'Guardando datos del cliente',
      icon: 'info',
      allowOutsideClick: false
    });
    Swal.showLoading();

    let peticion: Observable<any>;

    let msj = "";

    if ( this.cliente.id != "" ) {
      peticion = this.clientesService.actualizarCliente( this.cliente );
      msj = "actualizó";
    } else {

      peticion = this.clientesService.crearCliente( this.cliente );
      msj = "guardo";

    }

    peticion.subscribe( resp => {

      console.log(resp);
      // this.cliente = this.forma.value;
      // if ( this.cliente.id != "" ) {
        // console.log("NO SE CARGA");
      // }else{
        this.forma.get('id').setValue(resp.id);
        // this.cargarDataAlFormulario(resp);
        // console.log(resp);

      // }
      

      Swal.fire({
        title: this.cliente.nombre,
        text: 'Se '+msj+' correctamente el cliente',
        icon: 'success'
      });

    });



  }

}
