import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './ngx-demo/home-page.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./ngx-demo/ngx-demo.module').then(m => m.NgxDemoModule),
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
