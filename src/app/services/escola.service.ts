import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable } from 'rxjs';
import { Escola } from 'src/models/escola';

@Injectable({
  providedIn: 'root'
})
export class EscolaService {

  constructor(private _httpclient: HttpClient) { }
  private url = "http://localhost:3000/escolas"

  getEscola(): Observable<Escola[]>{
    return this._httpclient.get<Escola[]>(`${this.url}`)
  }

  postEscola(escola: Escola): Observable<Escola>{
    return this._httpclient.post<Escola>(`${this.url}`, escola);
  }

  putEscola(escola: Escola): Observable<Escola>{
    return this._httpclient.put<Escola>(`${this.url}/${escola.id}`, escola);
  }

  deleteEscola(escola: Escola): Observable<Escola>{
    return this._httpclient.delete<Escola>(`${this.url}/${escola.id}`);
  }

}
