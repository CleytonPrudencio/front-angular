import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class InicialService {

  constructor(private http: HttpClient) { }

  buscarSPTRANS(parametro: string) {
    // Adiciona o parâmetro cep_id à URL
    return this.http.get<any[]>(`http://localhost:8080/linhas?linha%20ou%20nome=${parametro}`);
    //return this.http.get<any[]>(`http://localhost:8080/cep?cep_id=03665000`);

  }

  buscarCEP(parametro: string) {
    // Adiciona o parâmetro cep_id à URL
    return this.http.get<any[]>(`http://localhost:8080/cep?cep_id=${parametro}`);
    //return this.http.get<any[]>(`http://localhost:8080/cep?cep_id=03665000`);

  }
}
