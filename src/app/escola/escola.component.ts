import { Component, OnInit } from '@angular/core';
import { Escola } from 'src/models/escola';
import { EscolaService } from '../services/escola.service';

@Component({
  selector: 'app-escola',
  templateUrl: './escola.component.html',
  styleUrls: ['./escola.component.css']
})
export class EscolaComponent implements OnInit {

  constructor(private escolaService: EscolaService) { }
  
  public escola: Escola[]

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

}
