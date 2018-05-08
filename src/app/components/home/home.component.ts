import {Component, ChangeDetectionStrategy} from '@angular/core';
import {MatDialog} from '@angular/material';
import {AngularFirestore, DocumentChangeAction} from 'angularfire2/firestore';
import {AngularFirestoreCollection} from 'angularfire2/firestore/collection/collection';
import {Observable} from 'rxjs';
import {filter, tap} from 'rxjs/operators';
import {AddSerieDialogComponent} from '../add-serie-dialog/add-serie-dialog.component';
import {Serie} from '../models/serie.model';


@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {

    collection: AngularFirestoreCollection<Serie>;
    changes: Observable<DocumentChangeAction[]>;
    series: Observable<Serie[]>;

    constructor(public dialog: MatDialog, public db: AngularFirestore) {
        db.firestore.settings({timestampsInSnapshots: true});
        this.collection = db.collection<Serie>('laura');
        this.series = this.collection.valueChanges();

        this.changes = this.collection.snapshotChanges().pipe(
                tap(changes => console.log(changes)),
        );
    }

    add() {
        const dialogRef = this.dialog.open(AddSerieDialogComponent, {
            width: '250px',
            data: {name: undefined}
        });

        dialogRef.afterClosed().pipe(
                filter(result => !!result)
        ).subscribe(result => {
            console.log('Adicionando a série', result);

            this.collection.add({name: result, cards: []})
                    .catch(reason => console.log(reason));
        });
    }

}
