import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ConfirmationService, MessageService } from 'primeng/api';
import { TRISTATECHECKBOX_VALUE_ACCESSOR } from 'primeng/tristatecheckbox';
import { Escola } from 'src/models/escola';
import { Turma } from 'src/models/turma';
import { EscolaService } from '../services/escola.service';
import { TurmaService } from '../services/turma.service';

@Component({
  selector: 'app-escola',
  templateUrl: './escola.component.html',
  styleUrls: ['./escola.component.css']
})
export class EscolaComponent implements OnInit {

  public escola: Escola[]
  public turma: Turma[]
  public escolaForm: FormGroup

  public displayModal: boolean;
  public display: boolean;
  public isEdit: boolean;
  public isView: boolean;

  constructor(private escolaService: EscolaService,
    private turmaService: TurmaService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService) { }

  ngOnInit(): void {

    this.getEscola();
    this.getTurmas();

    this.escolaForm = new FormGroup({
      nome: new FormControl((''), [Validators.required]),
      endereco: new FormControl((''), [Validators.required]),
      cnpj: new FormControl((''), [Validators.required, Validators.maxLength(9)]),
      turma: new FormControl((''), [Validators.required]),
      id: new FormControl((''))
    })
  }

  showModalDialog() {
    this.isEdit = false;
    this.isView = false;
    this.displayModal = true;
    this.escolaForm.enable();
    this.escolaForm.reset();
  }


  editForm(data: Escola) {
    this.isEdit = true;
    this.isView = false;
    this.displayModal = true
    this.escolaForm.setValue(data);
  }

  watchSchool(data: Escola) {
    this.isView = true;
    this.displayModal = true;
    this.escolaForm.setValue(data)
    this.escolaForm.disable()
  }

  postEscola() {
    this.escolaService.postEscola(this.escolaForm.value).subscribe(
      data => {
        this.escolaForm.reset();
        this.getEscola();
        this.messageService.add({ severity: 'success', summary: 'Feito', detail: 'Escola adicionada a lista!' });
        this.displayModal = false
      }
    )
  }

  putEscola() {
    this.escolaForm.enable()
    this.isEdit = true;
    this.escolaService.putEscola(this.escolaForm.value).subscribe(
      data => {
        this.escolaForm.reset();
        this.messageService.add({ severity: 'success', summary: 'Feito', detail: 'Escola Editada!' });
        this.displayModal = false;
        this.getEscola();
      }
    )
  }

  deleteEscola(data: Escola) {
    this.confirmationService.confirm({
      message: 'Tem certeza que deseja excluir a escola da lista?',
      accept: () => {
        this.escolaService.deleteEscola(data).subscribe(
          data => {
            this.messageService.add({ severity: 'warn', summary: 'Feito', detail: 'Escola Deletda' });
            this.getEscola();
          }
        )
      }
    })
  }

  getTurmas() {
    this.turmaService.getTurmas().subscribe(
      data => {
        this.turma = data
      }
    )
  }

    getEscola() {
    this.escolaService.getEscola().subscribe(
      data => {
        this.escola = data;
      }
    )
  }




}
