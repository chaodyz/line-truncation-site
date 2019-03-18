import { NgxDemoComponent } from './ngxDemo/ngxDemo.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'ngx-demo', component: NgxDemoComponent },
  {
    path: '',
    redirectTo: '/ngx-demo',
    pathMatch: 'full',
  },
  { path: '**', component: NgxDemoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
