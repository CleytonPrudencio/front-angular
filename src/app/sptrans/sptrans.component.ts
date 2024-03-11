import { Component, OnInit } from '@angular/core';
import {SptransService} from "../sptrans.service";


@Component({
  selector: 'app-sptrans',
  templateUrl: './sptrans.component.html',
  styleUrl: './sptrans.component.css'
})
export class SPTRANSComponent implements OnInit{

  detalhes: any;
  cepId: any;
  constructor(private sptransService: SptransService ) {
  }

  ngOnInit() {
    // Você pode chamar this.buscar() aqui se desejar
    this.buscar(this.cepId);
  }
  buscar(cepId: string) {
    this.sptransService.buscar(cepId).subscribe(
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
