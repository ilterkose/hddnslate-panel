import { Component } from '@angular/core';


@Component ({
  selector: 'app-deletetwt',
  template: `<h1 mat-dialog-title> Are you sure?</h1>
                <mat-dialog-actions>
                  <button mat-button [mat-dialog-close]="true">Yes</button>
                  <button mat-raised-button button [mat-dialog-close]="false" color="warn" >No</button>
                </mat-dialog-actions>`

})
export class DeletetwtComponent {

}
