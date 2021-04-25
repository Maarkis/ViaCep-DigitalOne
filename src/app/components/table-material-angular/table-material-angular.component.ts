import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';

export interface PeriodicElement {
    name: string;
    position: number;
    weight: number;
    symbol: string;
}


@Component({
    selector: 'app-table-material-angular',
    templateUrl: './table-material-angular.component.html',
    styleUrls: ['./table-material-angular.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableMaterialAngularComponent{
    @Input() displayedColumns: string[] = [];
    @Input() dataSource: any[] = [];

    constructor() {
    }
}
