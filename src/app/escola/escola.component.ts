import { Component, OnInit } from '@angular/core';
import { Escola } from 'src/models/escola';
import { EscolaService } from '../services/escola.service';

@Component({
  selector: 'app-escola',
  templateUrl: './escola.component.html',
  styleUrls: ['./escola.component.css']
})
export class EscolaComponent implements OnInit {
  
  public escola: Escola[]

  displayModal: boolean;

  display: boolean;

  // idEscola: number
  // nomeEscola: string
  // enderecoEscola: string
  // cnpjEscola: number
  // turmaId: number
  // nomeTurma: string
  // horarioTurma: string


  constructor(private escolaService: EscolaService) { }

  ngOnInit(): void {
    this.escolaService.getEscola().subscribe(
      data => {
        this.escola = data.map(item => {
          return new Escola(
            item.id,
            item.nome,
            item.endereco,
            item.cnpj,
            item.turma
          )
        })
        console.log(this.escola);

      }
    )
  }

  showModalDialog() {
    this.displayModal = true;
  }

  // postEscola(){

  //   let dados = {
  //     id : 1,
  //     nome: 'Escola eduardo',
  //     cnpj: '4845848648',
  //     endereco: 'Rua endereco, 89',
  //     turma: [ {
  //       turmaId: 1,
  //       nome: "Turma leonardo daVinci",
  //       horario: "11:00-12:00",
  //       escolaId: 4
  //     }]
  //   }

  //   this.escolaService.postEscola(dados);
  // }

}
