import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';
import { ScrollService } from './services/scroll.service';

@Component({
  selector: 'app-home',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  hasTruncated: boolean;
  numOfLines = 2;
  longText = `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
  aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.Nemo
  enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
  qui ratione voluptatem sequi nesciunt.Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
  consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam
  quaerat voluptatem.Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam,
  nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse
quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur ?`;
  token: Observable<string>;
  sideMenuItems: NavItem[] = [
    {
      text: 'About',
      url: 'about',
    },
    {
      text: 'Install',
      url: 'install',
    },
    {
      text: 'Demo',
      url: 'demo',
    },
    {
      text: 'Contact',
      url: 'contact',
    },
  ];
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
  truncateHandler(e) {
    this.hasTruncated = e;
  }
}
