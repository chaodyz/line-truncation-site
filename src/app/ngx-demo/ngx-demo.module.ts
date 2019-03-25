import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LineTruncationLibModule } from 'ngx-line-truncation';

import { NgxDemoRoutesModule } from './ngx-demo.routing';
import { NavItemComponent } from './components/nav-item/nav-item.component';
import { HomePageComponent } from './home-page.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, LineTruncationLibModule, AngularMaterialModule, NgxDemoRoutesModule, FormsModule],
  declarations: [HomePageComponent, NavItemComponent],
})
export class NgxDemoModule {}
