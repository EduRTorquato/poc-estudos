import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
  public displayModal: boolean;
  public display: boolean;
  public escolaForm: FormGroup

  isEdit: boolean;
  isView: boolean;

  constructor(private escolaService: EscolaService, private turmaService: TurmaService) { }

  ngOnInit(): void {

    this.getEscola();
    this.getTurmas();

    this.escolaForm = new FormGroup({
      nome: new FormControl((''), [Validators.required]),
      endereco: new FormControl((''), [Validators.required]),
      cnpj: new FormControl((''), [Validators.required]),
      turma: new FormControl((''), [Validators.required]),
      id: new FormControl((''))
    })
  }

  getEscola() {
    this.escolaService.getEscola().subscribe(
      data => {
        this.escola = data;
        console.log(this.escola);
      }
    )
  }

  getTurmas() {
    this.turmaService.getTurmas().subscribe(
      data => {
        this.turma = data
        console.log(data);
      }
    )
  }

  showModalDialog() {
    this.isEdit = false;
    this.isView =false;
    this.displayModal = true;
    this.escolaForm.enable();
    this.escolaForm.reset();
  }


  editForm(data: Escola){
    this.isEdit = true;
    this.isView = false;
    console.log(data);
    this.displayModal = true
    this.escolaForm.setValue(data);
  }

  watchSchool(data: Escola){
    this.isView = true;
    this.displayModal = true;
    this.escolaForm.setValue(data)
    this.escolaForm.disable()
  }

  postEscola() {
    this.escolaService.postEscola(this.escolaForm.value).subscribe(
      data => {
        console.log(data);
        this.escolaForm.reset();
        this.getEscola();
      }
    )
  }

  putEscola() {
    this.escolaForm.enable()
    this.isEdit = true;
    this.escolaService.putEscola(this.escolaForm.value).subscribe(
      data => {
        this.escolaForm.reset();
        this.displayModal = false;
        this.getEscola();
      }
    )
  }

  deleteEscola(data: Escola){
    this.escolaService.deleteEscola(data).subscribe(
      data => {
        this.getEscola();
      }
    )
  }

}
