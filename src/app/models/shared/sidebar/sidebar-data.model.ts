export class SidebarDataModel {
  title?: string;
  menuItemClass?: string;
  iconSpanClass?: string;
  iconClass?: string;
  icon?: string;
  isCollapseClass?: string;
  isNotCollapseClass?: string;
  titleClass?: string;
  routerLink?: string;
  isDisplayIcon?: boolean;
  isCollapseCheck?: boolean;
  children?: Array<SidebarDataModel>;
}
