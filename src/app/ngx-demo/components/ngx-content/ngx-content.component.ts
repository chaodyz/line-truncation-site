import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngx-content',
  templateUrl: './ngx-content.component.html',
  styleUrls: ['./ngx-content.component.scss'],
})
export class NgxContentComponent implements OnInit {
  langString = ['javascript', 'typescript'];
  hasTruncated: boolean;
  import = `import { LineTruncationLibModule } from 'ngx-line-truncation';

    //...

 @NgModule({
  imports: [
    // ...
    LineTruncationLibModule
  ]
})
export class MyModule { }
  `;

  import2 = `@NgModule({
  imports: [LineTruncationLibModule],
  declarations: [...components],
  exports: [...components, LineTruncationDirective],
  entryComponents: []
})
export class MySharedModule {}
`;
  html1 = `<p [line-truncation]="2" >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt
  consequatur ipsum unde doloremque aliquid hic vitae iure necessitatibus, maiores repellendus, quos
  dignissimos Quis necessitatibus quos voluptas nesciunt facere mollitia cupiditate.</p>`;
  html2 = `<p [line-truncation]="numOfLines" (hasTruncated)="handler(booleanValue)" [innerHTML]="myText"></p>`;
  code2 = `export class myComponent implements OnInit {

  hasTruncated = false;
  numberOfLines = 2;

  myText=\`Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga itaque voluptatibus sequi laborum, consequatur aut nisi.
  Eaque nulla animi qui exercitationem suscipit voluptas cum est dicta, magnam odio et distinctio?\`;

  //...

  handler(res: boolean){
    this.hasTruncated = res;
  }
}
  `;
  html3 = `<div [line-truncation]="2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt consequatur ipsum unde
  doloremque aliquid hic vitae iure necessitatibus, maiores repellendus, quos dignissimos? Quis necessitatibus quos voluptas
  nesciunt facere mollitia cupiditate.</div>`;
  constructor() {}

  ngOnInit() {}
  truncateHandler(e) {
    this.hasTruncated = e;
  }
}
