import { Injectable } from '@angular/core';
import { Address } from '../shared/interface/address.interface';

@Injectable({
    providedIn: 'root',
})
export class AddressListService {
    private _addresses: Address[] = [];

    constructor() {}

    get addresses(): Address[] {
        return this._addresses;
    }
    newAddress(address: Address): void {
        this._addresses = [address, ...this._addresses];
    }
}
