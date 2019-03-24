import { NgModule } from '@angular/core';

import {
  MatToolbarModule,
  MatButtonModule,
  MatCheckboxModule,
  MatIconModule,
  MatSidenavModule,
} from '@angular/material';

@NgModule({
  imports: [MatToolbarModule, MatButtonModule, MatCheckboxModule, MatIconModule, MatSidenavModule],
  exports: [MatToolbarModule, MatButtonModule, MatCheckboxModule, MatIconModule, MatSidenavModule],
})
export class AngularMaterialModule {}
