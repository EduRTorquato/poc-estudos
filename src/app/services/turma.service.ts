import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Turma } from 'src/models/turma';

@Injectable({
  providedIn: 'root'
})
export class TurmaService {

  constructor(private _httpclient: HttpClient) { }
  private url= "http://localhost:3000/turmas"
  

  getTurmas(): Observable<Turma[]>{
    return this._httpclient.get<Turma[]>(this.url)
  }

  postTurma(turma: Turma){
    return this._httpclient.post(this.url, turma);    
  }

}
