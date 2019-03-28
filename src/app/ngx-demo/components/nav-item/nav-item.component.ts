import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Router } from '@angular/router';
import { NavItemClass } from '../../models/navigation.model';

@Component({
  selector: 'app-nav-item',
  templateUrl: './nav-item.component.html',
  styleUrls: ['./nav-item.component.scss'],
})
export class NavItemComponent implements OnInit, OnChanges {
  @Input()
  item;
  @Input()
  isActive = false;
  classes: NavItemClass;

  constructor(private router: Router) {}

  ngOnInit() {
    this.setClasses();
  }
  ngOnChanges() {
    this.setClasses();
  }

  setClasses() {
    this.classes = {
      selected: this.isActive,
    };
  }

  handleClick(item) {
    this.router.navigate(['/'], { fragment: item.url });
  }
}
