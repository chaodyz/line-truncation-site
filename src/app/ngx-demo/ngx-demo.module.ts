import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LineTruncationLibModule } from 'ngx-line-truncation';

import { InstallPageComponent } from './install-page/install-page.component';
import { ExamplePageComponent } from './example-page/example-page.component';
import { LiveDemoPageComponent } from './live-demo-page/live-demo-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { NgxDemoRoutesModule } from './ngx-demo.routing';
import { NavItemComponent } from './components/nav-item/nav-item.component';
import { HomePageComponent } from './home-page.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';

@NgModule({
  imports: [CommonModule, LineTruncationLibModule, AngularMaterialModule, NgxDemoRoutesModule],
  declarations: [
    HomePageComponent,
    ExamplePageComponent,
    InstallPageComponent,
    LiveDemoPageComponent,
    ContactPageComponent,
    NavItemComponent,
  ],
})
export class NgxDemoModule {}
