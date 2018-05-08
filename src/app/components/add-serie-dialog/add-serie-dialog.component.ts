import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
    selector: 'app-add-serie-dialog',
    templateUrl: './add-serie-dialog.component.html',
    styleUrls: ['./add-serie-dialog.component.scss']
})
export class AddSerieDialogComponent {

    constructor(
            public dialogRef: MatDialogRef<AddSerieDialogComponent>,
            @Inject(MAT_DIALOG_DATA) public data: { card: number }) {
    }

    onNoClick(): void {
        this.dialogRef.close();
    }

}
