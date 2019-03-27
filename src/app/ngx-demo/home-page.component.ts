import { Component, OnInit, AfterViewInit } from '@angular/core';
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
  import = `import { LineTruncationLibModule } from 'ngx-line-truncation';

    //...

 @NgModule({
  imports: [
    // ...
    LineTruncationLibModule
  ]
})
export class myModule { }
  `;
  html1 = `<p [ngx-line-truncation]="2" >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt
  consequatur ipsum unde doloremque aliquid hic vitae iure necessitatibus, maiores repellendus, quos
  dignissimos Quis necessitatibus quos voluptas nesciunt facere mollitia cupiditate.</p>`;
  html2 = ' <p [line-truncation]="numOfLines" (hasTruncated)="handler(booleanValue)" [innerHTML]="myText"></p>';
  code2 = `export class myComponent implements OnInit {

  hasTruncated = false;
  numberOfLines = 2;
  myText='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga itaque voluptatibus sequi laborum, consequatur aut nisi.
  Eaque nulla animi qui exercitationem suscipit voluptas cum est dicta, magnam odio et distinctio?';

  //...

  handler(result: boolean){
    this.hasTruncated = result;
  }
  `;
  html3 = `<p [ngx-line-truncation]="2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt consequatur ipsum unde
  doloremque aliquid hic vitae iure necessitatibus, maiores repellendus, quos dignissimos? Quis necessitatibus quos voluptas
  nesciunt facere mollitia cupiditate.</p>`;

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
