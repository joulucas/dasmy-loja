import { Cliente } from './component/clientes/cliente-create/cliente-model';
import { Injectable } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  baseUrl ='http://localhost:3000/clientes'

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
  create(cliente: Cliente): Observable<Cliente>{
    return this.http.post<Cliente>(this.baseUrl,cliente)
  }

  read(): Observable<Cliente[]>{
    return this.http.get<Cliente[]>(this.baseUrl)
  }

  readById(id: string): Observable<Cliente>{
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Cliente>(url)
  }

  update (cliente: Cliente): Observable<Cliente>{
    const url = `${this.baseUrl}/${cliente}`

    return this.http.put<Cliente>(url, cliente)
  }
}
