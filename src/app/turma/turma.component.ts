import { Component, OnInit } from '@angular/core';
import { Turma } from 'src/models/turma';
import { TurmaService } from '../services/turma.service';

@Component({
  selector: 'app-turma',
  templateUrl: './turma.component.html',
  styleUrls: ['./turma.component.css']
})
export class TurmaComponent implements OnInit {

  public turmas: Turma[]

  displayModal: boolean

  display: boolean

  turmaEscolaId: any
  turmaId: any
  turmaNome: any
  turmaHorario: any



  constructor(private turmaService: TurmaService) { }

  ngOnInit(): void {
    this.turmaService.getTurmas().subscribe(
      data => {
        this.turmas = data.map(item =>{
          return new Turma(
            item.escolaId,
            item.turmaId,
            item.nome,
            item.horario
          )
        })
        console.log(this.turmas);
        
      }
    )
  }

  showModalDialog() {
    this.displayModal = true;
}

postTurma(){
  console.log('entrou');
  
  let dados = {
    turmaId: this.turmaId,
    nome: this.turmaNome,
    horario: this.turmaHorario,
    escolaId: this.turmaEscolaId
  }

  this.turmaService.postTurma(dados)
  console.log('teste');
  
}

}
