import { Component, OnInit } from '@angular/core';
import { GeneralService } from 'src/app/service/general.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  sideBarMenu: any;

  constructor(private genSrv: GeneralService) { }
  
  ngOnInit(): void {
    this.sideBarMenu = this.genSrv.sideBarMenu
    console.log("menu:", this.sideBarMenu)
  }
  
  toggleSubMenu(item: { isOpen: boolean; }) {
    item.isOpen = !item.isOpen;
  }
}
