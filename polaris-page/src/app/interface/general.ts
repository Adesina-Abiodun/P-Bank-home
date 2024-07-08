export interface SIDEBAR {
  icon?: string;
  goldenIcon?: string;
  showIcon: boolean;
  isOpen: boolean;
  isHovered?: boolean;
  title: string;
  route: string;
  showSubMenu: boolean;
  subMenu: { title: string; icon: string; route: string; isHovered?: boolean }[];
}


export interface Column {
  key: string;
  label: string;
}
