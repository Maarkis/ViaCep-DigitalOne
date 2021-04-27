import { getSafePropertyAccessString } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { AddressListService } from 'src/app/services/address-list.service';
import { Address } from 'src/app/shared/interface/address.interface';

@Component({
    selector: 'app-list-endereco',
    templateUrl: './list-endereco.component.html',
    styleUrls: ['./list-endereco.component.css'],
})
export class ListEnderecoComponent implements OnInit {
    addresses: Address[] = [];
    displayedColumns: string[] = [];
    constructor(private addressListService: AddressListService) {}

    ngOnInit(): void {
        this.addresses = this.addressListService.addresses;
        console.log(this.addresses);

        this.displayedColumns = [
            'cep',
            'logradouro',
            'complemento',
            'bairro',
            'localidade',
            'uf',
            'ibge',
            'gia',
            'ddd',
            'siafi',
        ];
    }
}
