import { Produto } from './produto-create/produto-model';
import { Injectable } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { threadId } from 'worker_threads';



@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  baseUrl ='http://localhost:3000/products'

  constructor(private snackBar: MatSnackBar,
    private http: HttpClient) { }

  showMessage(msg:string): void {
     this.snackBar.open(msg,
      'x',{
       duration:3000,
       horizontalPosition: "right",
       verticalPosition: "top"
     }
     )
  }
  create(produto: Produto): Observable<Produto>{
    return this.http.post<Produto>(this.baseUrl,produto)
  }

  read(): Observable<Produto[]>{
    return this.http.get<Produto[]>(this.baseUrl)
  }

  readById(id: string): Observable<Produto>{
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Produto>(url)
  }

  update (produto: Produto): Observable<Produto>{
    const url = `${this.baseUrl}/${produto}`

    return this.http.put<Produto>(url, produto)
  }
}

