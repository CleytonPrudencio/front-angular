import { Component, OnInit } from '@angular/core';
import {InicialService} from "./inicial.service";


@Component({
  selector: 'app-inicial',
  templateUrl: './inicial.component.html',
  styleUrl: './inicial.component.css'
})
export class InicialComponent implements OnInit{

  detalhes: any;
  input: any;
  opcaoSelecionada: any;
  constructor(private inicialService: InicialService ) {
  }
  reloadPage() {
    window.location.reload();
  }
  pegarValorSelecionado() {
    if (this.opcaoSelecionada === "1") {
      this.buscarCEP(this.input);
    } else if (this.opcaoSelecionada === "2") {
      this.buscarSPTRANS(this.input);
    }
  }
  ngOnInit() {
    // Você pode chamar this.buscar() aqui se desejar
    this.buscarSPTRANS(this.input);
    this.buscarSPTRANS(this.input);
  }


  buscarSPTRANS(linha: string) {
    this.inicialService.buscarSPTRANS(linha).subscribe(
      dados => {
        this.detalhes = dados;
        console.log(dados); // Apenas para debug, você pode remover essa linha
      },
      error => {
        console.error(error); // Trate o erro, se necessário
      }
    );
  }

  buscarCEP(cep: string) {
    this.inicialService.buscarCEP(cep).subscribe(
        dados => {
          this.detalhes = dados;
          console.log(dados); // Apenas para debug, você pode remover essa linha
        },
        error => {
          console.error(error); // Trate o erro, se necessário
        }
    );
  }
}
