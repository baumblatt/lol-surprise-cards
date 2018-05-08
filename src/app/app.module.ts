import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {AngularFirestoreModule} from 'angularfire2/firestore';
import {environment} from '../environments/environment';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LayoutComponent} from './components/layout/layout.component';
import {LayoutModule} from '@angular/cdk/layout';
import {
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatCardModule,
    MatGridListModule, MatDialogModule
} from '@angular/material';
import {HomeComponent} from './components/home/home.component';
import {CardsComponent} from './components/cards/cards.component';
import {ServiceWorkerModule} from '@angular/service-worker';
import {AddSerieDialogComponent} from './components/add-serie-dialog/add-serie-dialog.component';
import {AddCardDialogComponent} from './components/add-card-dialog/add-card-dialog.component';
import { RemoveCardDialogComponent } from './components/remove-card-dialog/remove-card-dialog.component';

@NgModule({
    declarations: [
        AppComponent,
        LayoutComponent,
        HomeComponent,
        CardsComponent,
        AddSerieDialogComponent,
        AddCardDialogComponent,
        RemoveCardDialogComponent,
    ],
    imports: [
        AppRoutingModule,
        BrowserAnimationsModule,
        BrowserModule,
        FormsModule,
        LayoutModule,
        MatCardModule,
        MatButtonModule,
        MatDialogModule,
        MatIconModule,
        MatInputModule,
        MatGridListModule,
        MatListModule,
        MatSidenavModule,
        MatToolbarModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireDatabaseModule,
        AngularFirestoreModule,
        ServiceWorkerModule.register('/ngsw-worker.js', {enabled: environment.production}),
    ],
    providers: [],
    bootstrap: [AppComponent],
    entryComponents: [AddSerieDialogComponent, AddCardDialogComponent, RemoveCardDialogComponent]
})
export class AppModule {
}
