import {Component, OnInit, ChangeDetectionStrategy, Input} from '@angular/core';
import {MatDialog} from '@angular/material';
import {filter} from 'rxjs/operators';
import {AddCardDialogComponent} from '../add-card-dialog/add-card-dialog.component';
import {Serie} from '../models/serie.model';

@Component({
    selector: 'app-cards',
    templateUrl: './cards.component.html',
    styleUrls: ['./cards.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardsComponent  {

    @Input('serie')
    public serie: Serie;

    constructor(public dialog: MatDialog) {
    }

    add() {
        const dialogRef = this.dialog.open(AddCardDialogComponent, {
            width: '250px',
            data: {card: undefined}
        });

        dialogRef.afterClosed().pipe(
                filter(result => !!result)
        ).subscribe(result => {
            console.log('Adicionando o card', result);
        });
    }

}
