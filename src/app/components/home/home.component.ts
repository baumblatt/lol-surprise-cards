import {Component, OnInit, ChangeDetectionStrategy} from '@angular/core';
import {AngularFirestore} from 'angularfire2/firestore';
import {Observable} from 'rxjs';
import {Serie} from '../models/serie.model';


@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {

    series: Observable<Serie[]>;

    constructor(db: AngularFirestore) {
        db.firestore.settings({ timestampsInSnapshots: true });
        this.series = db.collection<Serie>('laura').valueChanges();
    }


    ngOnInit() {
    }

}
