export interface SidebarItem {
  activeStyles: string;
  classNames: string;
  text: string;
  to: string;
  children?: SidebarItem[];
  child?: boolean;
}
