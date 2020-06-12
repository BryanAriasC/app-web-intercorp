import { Component, OnInit } from '@angular/core';
import { ClienteModel } from 'src/app/models/cliente.model';
import { ClientesService } from 'src/app/services/clientes.service';

@Component({
  selector: 'app-clientes-muerte',
  templateUrl: './clientes-muerte.component.html',
  styles: []
})
export class ClientesMuerteComponent implements OnInit {

  clientes: Array<ClienteModel> =  [];
  cargando = false;

  constructor(private clientesService: ClientesService) { }

  ngOnInit() {
    

    this.cargando = true;
    this.clientesService.getClientes()
      .subscribe( resp => {

        // this.clientes = resp;
        this.cargando = false;
        
        //Poblacion vulnerable por covid
        let tasaEdadMinProbable: number = 70;
        let tasaEdadMaxProbable: number = 100;
        let edadPMuerte = this.calculoRandom(tasaEdadMinProbable,tasaEdadMaxProbable);
        let clientesArr : Array<any> = [];
        resp.forEach(elm => {
          let fecha_nacimiento = elm['fecha_nacimiento'];
          let edad = elm['edad'];
          let edadMuerteProm = edadPMuerte - edad;
          
          let anioMuerte = new Date().getFullYear() + edadMuerteProm;
          let diaMuerte = this.addZero(this.calculoRandom(1,30));
          let mesMuerte = this.addZero(this.calculoRandom(1,12));
          let fechaP =  anioMuerte+"-"+mesMuerte+"-"+diaMuerte;// 2050-10-02
  
          elm.fecha_muerte = fechaP;

          clientesArr.push(elm);

        });

        this.clientes = clientesArr;
        // console.log(clientesArr);

      });
  }

  calculoRandom(min :number, max: number) {
    return Math.round(Math.random() * (max - min) + min);
  }

  addZero(i) {
    if (i < 10) {
        i = '0' + i;
    }
    return i;
}

}
