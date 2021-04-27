import {
    ChangeDetectionStrategy,
    Component,
    Input,
    OnInit,
} from '@angular/core';
import { Address } from 'src/app/shared/interface/address.interface';

@Component({
    selector: 'app-expansion-material-angular',
    templateUrl: './expansion-material-angular.component.html',
    styleUrls: ['./expansion-material-angular.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExpansionMaterialAngularComponent implements OnInit {
    @Input() address!: Address;
    @Input() disabled = false;

    constructor() {}

    ngOnInit(): void {
        console.log(this.address);
    }
}
