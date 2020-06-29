import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import {MatSnackBarModule} from '@angular/material/snack-bar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './component/header/header.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import { FooterComponent } from './component/footer/footer.component';
import { NavComponent } from './component/nav/nav.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatTreeModule} from '@angular/material/tree';
import { HomeComponent } from './views/home/home.component';
import {MatCardModule} from '@angular/material/card';
import { ProdutosComponent } from './views/produtos/produtos.component';
import { ClientesComponent } from './views/clientes/clientes.component';
import { VendasComponent } from './views/vendas/vendas.component';
import { RelatoriosComponent } from './views/relatorios/relatorios.component';
import { RedDirective } from './directives/red.directive';
import { ForDirective } from './directives/for.directive';
import { ProdutoCreateComponent } from './component/produtos/produto-create/produto-create.component';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FormsModule }   from '@angular/forms';
import { ProdutoReadComponent } from './component/produtos/produto-read/produto-read.component';
import { ProdutoRead2Component } from './component/produto-read2/produto-read2.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

import localePt  from '@angular/common/locales/pt'
import { registerLocaleData } from '@angular/common';
import { ClienteReadComponent } from './component/clientes/cliente-read/cliente-read.component';
import { ClienteCreateComponent } from './component/clientes/cliente-create/cliente-create.component';

registerLocaleData(localePt);



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    ProdutosComponent,
    ClientesComponent,
    VendasComponent,
    RelatoriosComponent,
    RedDirective,
    ForDirective,
    ProdutoCreateComponent,
    ProdutoReadComponent,
    ProdutoRead2Component,
    ClienteReadComponent,
    ClienteCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatTreeModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  providers: [{
    provide: LOCALE_ID,
    useValue: 'pt-BR'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
