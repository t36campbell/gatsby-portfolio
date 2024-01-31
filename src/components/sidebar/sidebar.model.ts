export interface SidebarItem {
  to: string;
  text: string;
  child?: boolean;
  children?: SidebarItem[];
}
