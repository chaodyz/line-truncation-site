import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExamplePageComponent } from './example-page/example-page.component';
import { InstallPageComponent } from './install-page/install-page.component';
import { LiveDemoPageComponent } from './live-demo-page/live-demo-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { HomePageComponent } from './home-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    children: [
      {
        path: 'examples',
        component: ExamplePageComponent,
      },
      {
        path: 'install',
        component: InstallPageComponent,
      },
      {
        path: 'livedemo',
        component: LiveDemoPageComponent,
      },
      {
        path: 'contact',
        component: ContactPageComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NgxDemoRoutesModule {}
