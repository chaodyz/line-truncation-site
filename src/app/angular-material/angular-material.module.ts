import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  imports: [MatToolbarModule, MatButtonModule, MatCheckboxModule, MatIconModule, MatSidenavModule],
  exports: [MatToolbarModule, MatButtonModule, MatCheckboxModule, MatIconModule, MatSidenavModule],
})
export class AngularMaterialModule {}
