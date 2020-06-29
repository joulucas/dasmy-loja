import { ClienteCreateComponent } from './component/clientes/cliente-create/cliente-create.component';
import { ProdutoCreateComponent } from './component/produtos/produto-create/produto-create.component';
import { RelatoriosComponent } from './views/relatorios/relatorios.component';
import { VendasComponent } from './views/vendas/vendas.component';
import { ClientesComponent } from './views/clientes/clientes.component';
import { ProdutosComponent } from './views/produtos/produtos.component';
import { HomeComponent } from './views/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [{
  path:"",
  component: HomeComponent
},{
  path:"produtos",
  component: ProdutosComponent
},{
  path:"produtos/novo",
  component: ProdutoCreateComponent
},{
  path:"clientes",
  component: ClientesComponent
},{
  path:"clientes/novo",
  component: ClienteCreateComponent
},{
    path:"vendas",
    component: VendasComponent
 },{
  path:"relatorios",
  component: RelatoriosComponent
} ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
