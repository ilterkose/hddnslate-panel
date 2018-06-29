import { NgModule ,} from '@angular/core';
import {
  MatButtonModule,
  MatIconModule,
  MatFormFieldModule,
  MatInputModule,
  MatSidenavModule,
  MatCardModule,
  MatToolbarModule,
  MatListModule,
  MatTableModule, MatProgressSpinner
} from '@angular/material';

import { MatGridListModule } from '@angular/material/grid-list';
import {MatBadgeModule} from '@angular/material/badge';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatDialogModule } from '@angular/material/dialog';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSelectModule} from '@angular/material/select';


@NgModule({
  imports: [
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatGridListModule,
    MatTableModule,
    MatBadgeModule,
    MatButtonToggleModule,
    MatDialogModule,
    MatSelectModule,
    MatProgressSpinnerModule,
  ],
  exports: [MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatGridListModule,
    MatTableModule,
    MatBadgeModule,
    MatButtonToggleModule,
    MatDialogModule,
    MatSelectModule,
    MatProgressSpinnerModule,
  ],
})

export class MaterialModule {}

