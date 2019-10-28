import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-js-content',
  templateUrl: './js-content.component.html',
  styleUrls: ['./js-content.component.scss'],
})
export class JsContentComponent implements OnInit {
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
  html2 =
    ' <p [line-truncation]="numOfLines" (hasTruncated)="handler(booleanValue)" [innerHTML]="myText"></p>';
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
  constructor() {}

  ngOnInit() {}
  truncateHandler(e) {
    this.hasTruncated = e;
  }
}
