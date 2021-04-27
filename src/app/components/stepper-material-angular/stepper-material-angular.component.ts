import { Component, OnInit } from '@angular/core';
import { AddressListService } from 'src/app/services/address-list.service';
import { ViaCepService } from 'src/app/services/via-cep.service';
import { Address } from 'src/app/shared/interface/address.interface';

@Component({
    selector: 'app-stepper-material-angular',
    templateUrl: './stepper-material-angular.component.html',
    styleUrls: ['./stepper-material-angular.component.css'],
})
export class StepperMaterialAngularComponent implements OnInit {
    isLinear = true;
    address!: Address;
    cep!: string;

    constructor(
        private _viaCepService: ViaCepService,
        private addressListService: AddressListService
    ) {}

    ngOnInit(): void {}

    public setValue(value: string): void {
        this.cep = value;
    }

    addToAddressList(address: Address): void {
        if (address) {
            this.addressListService.newAddress(address);
        }
    }

    public getCep(): void {
        if (this.cep) {
            this._viaCepService.getCep(this.cep).subscribe(
                (response: Address) => {
                    this.address = response;
                },
                (error) => {
                    console.log(error);
                }
            );
        }
    }
}
