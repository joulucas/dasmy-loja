import { ClienteService } from './../../../cliente.service';
import { Cliente } from './../cliente-create/cliente-model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cliente-read',
  templateUrl: './cliente-read.component.html',
  styleUrls: ['./cliente-read.component.css']
})
export class ClienteReadComponent implements OnInit {

  ativo = "sim";


  clientes: Cliente[];
  displayedColumns = ['id', 'nome' , 'dastNasc', "action" ,"ativo"]

  constructor(private clienteService: ClienteService) { }

  ngOnInit(): void {
      this.clienteService.read().subscribe(clientes => {
          this.clientes = clientes
          console.log(clientes)
      })

  }


}
