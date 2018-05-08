import {Component, ChangeDetectionStrategy, Input, Output, EventEmitter} from '@angular/core';
import {MatDialog} from '@angular/material';
import {DocumentChangeAction} from 'angularfire2/firestore';
import {filter} from 'rxjs/operators';
import {AddCardDialogComponent} from '../add-card-dialog/add-card-dialog.component';
import {Serie} from '../models/serie.model';

@Component({
    selector: 'app-cards',
    templateUrl: './cards.component.html',
    styleUrls: ['./cards.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardsComponent {

    @Input('document')
    public document: DocumentChangeAction;

    @Input('serie')
    public serie: Serie;

    @Output('add')
    public added = new EventEmitter<Serie>();

    constructor(public dialog: MatDialog) {
    }

    remove(card) {
        if (confirm(`Você deseja excluir o card ${card}?`)) {

            const cards = [...this.serie.cards];
            cards.splice(cards.indexOf(card), 1);

            const serie = {
                ...this.serie,
                cards
            };

            this.document.payload.doc.ref.update(serie).catch(
                    error => console.log(error)
            );
        }
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

            const serie = {
                ...this.serie,
                cards: [...this.serie.cards, result].sort((a, b) => a < b ? -1 : b < a ? 1 : 0)
            };

            this.document.payload.doc.ref.update(serie).catch(
                    error => console.log(error)
            );
        });
    }

}
