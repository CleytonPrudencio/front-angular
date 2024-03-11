import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SptransService {

  constructor(private http: HttpClient) { }

  buscar(cepId: string) {
    // Adiciona o parâmetro cep_id à URL
    return this.http.get<any[]>(`http://localhost:8080/cep?cep_id=${cepId}`);
    //return this.http.get<any[]>(`http://localhost:8080/cep?cep_id=03665000`);

  }
}
