import { Component, OnInit } from '@angular/core';
import { Turma } from 'src/models/turma';
import { TurmaService } from '../services/turma.service';

@Component({
  selector: 'app-turma',
  templateUrl: './turma.component.html',
  styleUrls: ['./turma.component.css']
})
export class TurmaComponent implements OnInit {

  turmas: Turma[]

  constructor(private turmaService: TurmaService) { }

  ngOnInit(): void {
    this.turmaService.getTurmas().subscribe(
      data =>{
        this.turmas = data.map(item =>{
          return new Turma(
            item.escolaId,
            item.turmaId,
            item.nome,
            item.horario
          )
        })
      }
    )
  }

}
