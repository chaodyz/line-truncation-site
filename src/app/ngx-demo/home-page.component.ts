import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';
import { ScrollService } from './services/scroll.service';
import { Page } from './models/navigation.model';

@Component({
  selector: 'app-home',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  currentPage: Page = {
    title: 'NGX Line Truncation',
    pageName: 'ngx',
    sideMenuItems: [
      {
        text: 'Overview',
        url: 'overview',
      },
      {
        text: 'Feature',
        url: 'feature',
      },
      {
        text: 'Install',
        url: 'install',
      },
      {
        text: 'How to use',
        url: 'demo',
      },
      {
        text: 'Update',
        url: 'update',
      },
      {
        text: 'Contact',
        url: 'contact',
      },
    ],
  };

  token: Observable<string>;

  constructor(private route: ActivatedRoute, private scrollSvc: ScrollService) {}

  ngOnInit() {
    this.token = this.route.fragment.pipe(
      filter(fragment => !!fragment),
      map(fragment => {
        this.scrollSvc.scroll(fragment);
        return fragment;
      })
    );
  }
}
