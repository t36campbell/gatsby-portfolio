export interface SidebarItem {
  activeStyles: object;
  classNames: string;
  children?: SidebarItem[];
  text: string;
  to: string;
}
