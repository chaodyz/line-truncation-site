import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  sideMenuItems: NavItem[] = [
    {
      text: 'Live Demo',
      url: 'livedemo',
    },
    {
      text: 'Install',
      url: 'install',
    },
    {
      text: 'Examples',
      url: 'examples',
    },
    {
      text: 'Contact',
      url: 'contact',
    },
  ];
  constructor() {}

  ngOnInit() {}
}
