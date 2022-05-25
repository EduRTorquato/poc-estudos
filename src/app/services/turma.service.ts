import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Turma } from 'src/models/turma';

@Injectable({
  providedIn: 'root'
})
export class TurmaService {

  constructor(private _httclient: HttpClient) { }
  private url=" http://localhost:3000/turmas"
  

  getTurmas(): Observable<Turma[]>{
    return this._httclient.get<Turma[]>(this.url)
  }
}
