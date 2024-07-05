export interface SIDEBAR {
    icon?: string;
    showIcon: boolean;
    isOpen: boolean;
    title: string;
    showSubMenu: boolean;
    subMenu: { title: string; icon: string }[]; 
  }
  