import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LogonDialogComponent } from './logon-dialog/logon-dialog.component';

@Component({
  selector: 'app-toobar',
  templateUrl: './toobar.component.html',
  styleUrls: ['./toobar.component.css']
})
export class ToobarComponent {
  showFiller = false;
  constructor(public dialog: MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(LogonDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
