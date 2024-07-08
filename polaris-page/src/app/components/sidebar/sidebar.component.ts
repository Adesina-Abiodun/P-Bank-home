import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SIDEBAR } from 'src/app/interface/general';
import { GeneralService } from 'src/app/service/general.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  sideBarMenu: any;
  activeSubMenuItem: { title: string; icon: string; route: string; isHovered?: boolean } | null = null;

  constructor(private genSrv: GeneralService, private router: Router) { }
  
  ngOnInit(): void {
    this.sideBarMenu = this.genSrv.sideBarMenu
  }
  
  toggleSubMenu(selectedItem: SIDEBAR) {
    this.sideBarMenu.forEach((item: SIDEBAR) => {
      if (item !== selectedItem) {
        item.isOpen = false;
      }
    });
    selectedItem.isOpen = !selectedItem.isOpen;
  }

  setActiveSubMenuItem(subItem: { title: string; icon: string; route: string; isHovered?: boolean }) {
    this.activeSubMenuItem = subItem;
  }

  isSubMenuActive(route: string): boolean {
    return this.router.url.includes(route);
  }
}
