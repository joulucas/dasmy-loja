import { ProdutosService } from './../produtos.service';
import { Component, OnInit } from '@angular/core';
import { Produto } from '../produto-create/produto-model';

@Component({
  selector: 'app-produto-read',
  templateUrl: './produto-read.component.html',
  styleUrls: ['./produto-read.component.css']
})
export class ProdutoReadComponent implements OnInit {

  produtos: Produto[];
  displayedColumns = ['id', 'name' , 'price', "action"]

  constructor(private produtoService: ProdutosService) { }

  ngOnInit(): void {
      this.produtoService.read().subscribe(produtos => {
          this.produtos = produtos
          console.log(produtos)
      })

  }



}
