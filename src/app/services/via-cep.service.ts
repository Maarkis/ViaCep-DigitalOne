import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Address } from '../shared/interface/address.interface';

@Injectable({
    providedIn: 'root',
})
export class ViaCepService {
    private urlRequest = 'https://viacep.com.br/ws/{cep}/json/';
    constructor(private http: HttpClient) {}

    public getCep(cep: string): Observable<Address> {
        return this.http.get<Address>(
            `${this.urlRequest.replace('{cep}', cep)}`
        );
    }
}
