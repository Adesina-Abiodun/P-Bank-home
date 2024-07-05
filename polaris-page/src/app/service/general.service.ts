import { Injectable } from '@angular/core';
import { SIDEBAR } from '../interface/general';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  get sideBarMenu(): SIDEBAR[] {
    return [
      { title: 'File Data Manager', 
        icon: 'fas fa-home', 
        showIcon: true,
        isOpen: false, 
        showSubMenu: false,
        subMenu: [
         {
          title: 'item 1',
          icon: ''
         },
         {
          title: 'item 1',
          icon: ''
         },
         {
          title: 'item 1',
          icon: ''
         }
        ] 
      },
      { title: 'User Setup',
        icon: 'fas fa-cog', 
        showIcon: true,
        isOpen: false, 
        showSubMenu: false,
        subMenu: [
          {
            title: "item 1",
            icon: ""
          }
        ] 
      },
      { title: 'Audit trail',
        icon: 'fas fa-cog', 
        showIcon: true,
        isOpen: false, 
        showSubMenu: false,
        subMenu: [
          {
            title: "item 1",
            icon: ""
          }
        ] 
      },
      { title: 'My Profile',
        icon: 'fas fa-cog', 
        showIcon: true,
        isOpen: false, 
        showSubMenu: false,
        subMenu: [
          {
            title: "item 1",
            icon: ""
          }
        ] 
      },
      { title: 'Portal Settings',
        icon: 'fas fa-cog', 
        showIcon: true,
        isOpen: false, 
        showSubMenu: false,
        subMenu: [
          {
            title: "item 1",
            icon: ""
          }
        ] 
      },
      { title: 'Admin Reports',
        icon: 'fas fa-cog', 
        showIcon: true,
        isOpen: false,
        showSubMenu: false,
        subMenu: [
          {
            title: "item 1",
            icon: ""
          }
        ] 
      }
    ]
  }
}
