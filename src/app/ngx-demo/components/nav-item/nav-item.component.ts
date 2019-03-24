import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-nav-item',
  templateUrl: './nav-item.component.html',
  styleUrls: ['./nav-item.component.scss'],
})
export class NavItemComponent implements OnInit, OnChanges {
  @Input()
  item;

  classes: NavItemClass;
  isSelected = false;
  constructor() {}

  ngOnInit() {
    this.setClasses();
  }
  ngOnChanges() {
    this.setClasses();
  }

  setClasses() {
    this.classes = {
      selected: this.isSelected,
    };
  }

  handleClick() {
    this.setClasses();
  }
}
