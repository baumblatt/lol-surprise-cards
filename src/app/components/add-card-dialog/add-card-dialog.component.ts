import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
    selector: 'app-add-card-dialog',
    templateUrl: './add-card-dialog.component.html',
    styleUrls: ['./add-card-dialog.component.scss']
})
export class AddCardDialogComponent {

    constructor(
            public dialogRef: MatDialogRef<AddCardDialogComponent>,
            @Inject(MAT_DIALOG_DATA) public data: { card: number }) {
    }

    onNoClick(): void {
        this.dialogRef.close();
    }
}
