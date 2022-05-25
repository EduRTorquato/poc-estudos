import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Escola } from 'src/models/escola';

@Injectable({
  providedIn: 'root'
})
export class EscolaService {

  constructor(private _httpclient: HttpClient) { }
  private url = "http://localhost:3000/escolas"

  getEscola(): Observable<Escola[]>{
    return this._httpclient.get<Escola[]>(this.url)
  }

  postEscola(escola: Escola){
    return this._httpclient.post(this.url, escola)
  }
}
