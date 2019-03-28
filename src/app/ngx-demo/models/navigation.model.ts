export interface NavItem {
  text: string;
  url?: string;
}

export interface NavItemClass {
  [index: string]: boolean;
}

export interface Page {
  title: string;
  pageName: string;
  sideMenuItems: NavItem[];
}
