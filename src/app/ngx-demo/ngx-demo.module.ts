import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HighlightModule } from 'ngx-highlightjs';
import { LineTruncationLibModule } from 'ngx-line-truncation';

import { NgxDemoRoutesModule } from './ngx-demo.routing';
import { NavItemComponent } from './components/nav-item/nav-item.component';
import { HomePageComponent } from './home-page.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { NgxContentComponent } from './components/ngx-content/ngx-content.component';
import { JsContentComponent } from './components/js-content/js-content.component';

@NgModule({
  imports: [
    CommonModule,
    LineTruncationLibModule,
    AngularMaterialModule,
    NgxDemoRoutesModule,
    FormsModule,
    HighlightModule,
  ],
  declarations: [HomePageComponent, NavItemComponent, NgxContentComponent, JsContentComponent],
})
export class NgxDemoModule {}
