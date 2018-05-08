import {Component, ChangeDetectionStrategy} from '@angular/core';
import {MatDialog} from '@angular/material';
import {AngularFirestore} from 'angularfire2/firestore';
import {Observable} from 'rxjs';
import {filter} from 'rxjs/operators';
import {AddSerieDialogComponent} from '../add-serie-dialog/add-serie-dialog.component';
import {Serie} from '../models/serie.model';


@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {

    series: Observable<Serie[]>;

    constructor(public dialog: MatDialog, db: AngularFirestore) {
        db.firestore.settings({timestampsInSnapshots: true});
        this.series = db.collection<Serie>('laura').valueChanges();
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
        });
    }

}
