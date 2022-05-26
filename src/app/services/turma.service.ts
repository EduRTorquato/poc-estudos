import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Escola } from 'src/models/escola';
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

  postTurma(turma: Turma): Observable<Turma>{
    return this._httpclient.post<Turma>(`${this.url}`, turma);    
  }

  putTurma(turma: Turma): Observable<Turma>{
    return this._httpclient.put<Turma>(`${this.url}/${turma.id}`, turma )
  }

  deleteTurma(turma: Turma): Observable<Turma>{
    return this._httpclient.delete<Turma>(`${this.url}/${turma.id}`)
  }

}
