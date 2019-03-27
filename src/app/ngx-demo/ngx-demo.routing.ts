import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HighlightModule } from 'ngx-highlightjs';

import { HomePageComponent } from './home-page.component';
import { ScrollService } from './services/scroll.service';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes), HighlightModule],
  exports: [RouterModule],
  providers: [ScrollService],
})
export class NgxDemoRoutesModule {}
