import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Turma } from 'src/models/turma';
import { TurmaService } from '../services/turma.service';

@Component({
  selector: 'app-turma',
  templateUrl: './turma.component.html',
  styleUrls: ['./turma.component.css']
})
export class TurmaComponent implements OnInit {

  public turmas: Turma[]
  turmaForm: FormGroup;

  displayModal: boolean
  display: boolean
  isEdit: boolean
  isWatch: boolean

  constructor(private turmaService: TurmaService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService, 
    private router: Router) { }



  ngOnInit(): void {
    this.getTurmas()
    this.turmaForm = new FormGroup({
      nome: new FormControl((''), [Validators.required]),
      horario: new FormControl((''), [Validators.required]),
      id: new FormControl((''))
    })
  }


  showModalDialog() {
    this.turmaForm.enable()
    this.turmaForm.reset()
    this.isEdit = false
    this.isWatch = false
    this.displayModal = true
  }

  editTurmaForm(data: Turma) {
    this.turmaForm.enable()
    this.turmaForm.setValue(data)
    this.isEdit = true
    this.isWatch = false
    this.displayModal = true
  }
  watchTurmaForm(data: Turma) {
    this.turmaForm.setValue(data)
    this.turmaForm.disable();
    this.isEdit = false
    this.isWatch = true
    this.displayModal = true
  }

  postTurma() {
    this.turmaService.postTurma(this.turmaForm.value).subscribe(data => {
      this.turmaForm.reset
      this.getTurmas()
      this.displayModal = false
      this.messageService.add({ severity: 'success', summary: 'Feito', detail: 'Turma adicionada a lista!' });
    })
  }

  getTurmas() {
    this.turmaService.getTurmas().subscribe(
      data => {
        this.turmas = data
      }
    )
  }

  deleteTurma(data: Turma) {
    this.confirmationService.confirm({
      message: 'Tem certeza que deseja apagar a turma?',
      accept: () => {
        this.turmaService.deleteTurma(data).subscribe(data => {
          this.messageService.add({ severity: 'warn', summary: 'Feito', detail: 'Turma removida da lista!' });
          this.getTurmas()
        })
      }
    });

  }

  editTurma() {
    this.turmaService.putTurma(this.turmaForm.value).subscribe(data => {
      console.log(data);
      this.turmaForm.reset();
      this.displayModal = false
      this.messageService.add({ severity: 'success', summary: 'Feito', detail: 'Turma alterada com sucesso!' });
      this.getTurmas();
    })
  }

  getOneTurma() {
    this.displayModal = true
  }

  sair() {
    this.confirmationService.confirm({
      message: 'Deseja encerrar a sessão?',
      accept: () => { 
        this.router.navigate(['login'])
      }
    })
  }

}
