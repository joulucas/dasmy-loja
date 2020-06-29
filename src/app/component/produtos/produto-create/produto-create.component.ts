import { Router } from '@angular/router';
import { ProdutosService } from './../produtos.service';
import { Component, OnInit } from '@angular/core';
import { Produto } from './produto-model';


@Component({
  selector: 'app-produto-create',
  templateUrl: './produto-create.component.html',
  styleUrls: ['./produto-create.component.css']
})
export class ProdutoCreateComponent implements OnInit {

  produto: Produto = {
    name: '',
    price: null

  }

  constructor(private produtosService: ProdutosService,
    private router: Router) { }

  ngOnInit(): void {
  }

  createProduct(): void {
    this.produtosService.create(this.produto).subscribe(() =>{
      this.produtosService.showMessage('Produto Criado')
      this.router.navigate(['/produtos'])
    })
  }
  cancel(): void {
   this.router.navigate(['/produtos'])
  }

}
