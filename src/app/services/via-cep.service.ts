import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Endereco} from '../shared/interface/endereco.interface';

@Injectable({
  providedIn: 'root'
})
export class ViaCepService {


  private urlRequest: string = 'https://viacep.com.br/ws/{cep}/json/';
  constructor(private http: HttpClient) { }


  public getCep(cep: string): Observable<Endereco> {
      return this.http.get<Endereco>(`${this.urlRequest.replace('{cep}', cep)}`);
  }
}
