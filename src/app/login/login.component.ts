import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {AppService} from "../app.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


  user: any;
  senha: any;
  nomecompleto: any;
  dtnascimento: any;
  email: any;
  telefone: any;
  cep: any;
  resultado: any;
  constructor(private appservice: AppService, private router: Router) {
  }
  reloadPage() {
    window.location.reload();
  }

  ngOnInit() {
    // Você pode chamar this.buscar() aqui se desejar

  }
  redirectToInicial(): void {
    this.router.navigate(['/inicial']);
  }

  redirectTologin(): void {
    this.router.navigate(['/login']);
  }

  login(user: string, senha: string) {
    this.appservice.loginAPI(user, senha).subscribe(
        dados => {
          this.redirectToInicial();
        },
        error => {
        }
    );
  }

  createUser(user: string, senha: string,nomecompleto: string,dtnascimento: string,email: string,telefone: string,cep: string) {
    this.appservice.create(user, senha, nomecompleto, dtnascimento, email, telefone, cep).subscribe(
        dados => {
          this.redirectTologin();
        },
        error => {
        }
    );
  }
}
