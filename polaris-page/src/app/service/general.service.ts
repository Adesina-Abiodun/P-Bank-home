import { Injectable } from '@angular/core';
import { SIDEBAR } from '../interface/general';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  get sideBarMenu(): SIDEBAR[] {
    return [
      {
        title: 'File Data Manager',
        icon: 'fas fa-home',
        showIcon: true,
        isOpen: false,
        showSubMenu: false,
        route: 'file-data-manager', // Add route here
        subMenu: [
          { title: 'Item 1', icon: '', route: 'file-data-manager/item1' }, // Add route here
          { title: 'Item 2', icon: '', route: 'file-data-manager/item2' },
          { title: 'Item 3', icon: '', route: 'file-data-manager/item3' }
        ]
      },
      {
        title: 'User Setup',
        icon: 'fas fa-cog',
        showIcon: true,
        isOpen: false,
        showSubMenu: false,
        route: 'user-setup', // Add route here
        subMenu: [
          { title: 'Item 1', icon: '', route: 'user-setup/item1' }
        ]
      },
      {
        title: 'Audit Trail',
        icon: 'fas fa-cog',
        showIcon: true,
        isOpen: false,
        showSubMenu: true,
        route: 'audit-trail', // Add route here
        subMenu: [
          { title: 'Activity Log', icon: '', route: 'audit-trail/activity-log' },
          { title: 'Change Log', icon: '', route: 'audit-trail/change-log' }
        ]
      },
      {
        title: 'My Profile',
        icon: 'fas fa-cog',
        showIcon: true,
        isOpen: false,
        showSubMenu: false,
        route: 'my-profile', // Add route here
        subMenu: [
          { title: 'Item 1', icon: '', route: 'my-profile/item1' }
        ]
      },
      {
        title: 'Portal Settings',
        icon: 'fas fa-cog',
        showIcon: true,
        isOpen: false,
        showSubMenu: false,
        route: 'portal-settings', // Add route here
        subMenu: [
          { title: 'Item 1', icon: '', route: 'portal-settings/item1' }
        ]
      },
      {
        title: 'Admin Reports',
        icon: 'fas fa-cog',
        showIcon: true,
        isOpen: false,
        showSubMenu: false,
        route: 'admin-reports', // Add route here
        subMenu: [
          { title: 'Item 1', icon: '', route: 'admin-reports/item1' }
        ]
      }
    ];
  }
  
}
