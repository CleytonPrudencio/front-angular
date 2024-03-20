import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  loginAPI(user: string, senha: string) {
    // Adiciona o parâmetro cep_id à URL
    return this.http.get<any[]>(`http://localhost:8080/user/listUser?cpfcnpj=${user}`);
    //return this.http.get<any[]>(`http://localhost:8080/cep?cep_id=03665000`);

  }

  create(user: string, senha: string,nomecompleto: string,dtnascimento: string,email: string,telefone: string,cep: string) {
    // Adiciona o parâmetro cep_id à URL
    //return this.http.get<any[]>(`http://localhost:8080/cep?cep_id=03665000`);
    // @ts-ignore
    return this.http.put<any[]>(`http://localhost:8080/user?cep=${cep}&cpf%2Fcnpj=${user}&Data%20de%20Nascimento=${dtnascimento}&email=${email}&Nome%20Completo=${nomecompleto}&password=${senha}&telefone=${telefone}`);

  }
}
