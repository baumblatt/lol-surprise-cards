import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {AddCardDialogComponent} from '../add-card-dialog/add-card-dialog.component';

@Component({
    selector: 'app-remove-card-dialog',
    templateUrl: './remove-card-dialog.component.html',
    styleUrls: ['./remove-card-dialog.component.scss']
})
export class RemoveCardDialogComponent {

    constructor(
            public dialogRef: MatDialogRef<RemoveCardDialogComponent>,
            @Inject(MAT_DIALOG_DATA) public data: { card: number }) {
    }

    cancel() {
        this.dialogRef.close(false);
    }

    remove() {
        this.dialogRef.close(true);
    }
}
