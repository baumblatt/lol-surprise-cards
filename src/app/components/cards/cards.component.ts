import {Component, OnInit, ChangeDetectionStrategy, Input} from '@angular/core';
import {Serie} from '../models/serie.model';

@Component({
    selector: 'app-cards',
    templateUrl: './cards.component.html',
    styleUrls: ['./cards.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardsComponent implements OnInit {

    @Input('serie')
    public serie: Serie;

    constructor() {
    }

    ngOnInit() {
    }

}
