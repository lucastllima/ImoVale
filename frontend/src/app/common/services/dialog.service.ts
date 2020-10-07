import { DialogDeleteComponent } from './dialogs/dialog-delete/dialog-delete.component';
import { Injectable, Component } from '@angular/core';
import { MatDialog } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(public dialog: MatDialog) { }

  confirmDeletePropertie(name) {
    const dialogRef = this.dialog.open(DialogDeleteComponent, {
      data: { name: name }
    });

    return dialogRef.afterClosed();
  }
}

