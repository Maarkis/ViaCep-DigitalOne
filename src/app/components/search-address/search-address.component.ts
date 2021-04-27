import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-search-address',
    templateUrl: './search-address.component.html',
    styleUrls: ['./search-address.component.css'],
})
export class SearchAddressComponent implements OnInit {
    value!: string;
    @Output() valueEmitter = new EventEmitter<string>();

    constructor() {}

    ngOnInit(): void {}
}
