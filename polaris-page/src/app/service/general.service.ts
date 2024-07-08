import { Injectable } from '@angular/core';
import { SIDEBAR } from '../interface/general';

@Injectable({
  providedIn: 'root',
})
export class GeneralService {
  get sideBarMenu(): SIDEBAR[] {
    return [
      {
        title: 'File Data Manager',
        icon: '../../../assets/icons/fileManager.svg',
        goldenIcon: '../../../assets/icons/golden-fileManager.png',
        showIcon: true,
        isOpen: false,
        isHovered: false,
        showSubMenu: false,
        route: 'file-data-manager',
        subMenu: [
          { title: 'Item 1', icon: '', route: 'file-data-manager/item1', isHovered: false },
          { title: 'Item 2', icon: '', route: 'file-data-manager/item2', isHovered: false },
          { title: 'Item 3', icon: '', route: 'file-data-manager/item3', isHovered: false },
        ],
      },
      {
        title: 'User Setup',
        icon: '../../../assets/icons/userSetUp.svg',
        goldenIcon: '../../../assets/icons/g1.svg',
        showIcon: true,
        isOpen: false,
        isHovered: false,
        showSubMenu: false,
        route: 'user-setup',
        subMenu: [{ title: 'Item 1', icon: '', route: 'user-setup/item1', isHovered: false }],
      },
      {
        title: 'Audit Trail',
        icon: '../../../assets/icons/newAudit.svg',
        goldenIcon: '../../../assets/icons/audit-golden.svg',
        showIcon: true,
        isOpen: false,
        isHovered: false,
        showSubMenu: true,
        route: 'audit-trail',
        subMenu: [
          { title: 'Activity Log', icon: '', route: 'audit-trail/activity-log', isHovered: false },
          { title: 'Change Log', icon: '', route: 'audit-trail/change-log', isHovered: false },
        ],
      },
      {
        title: 'My Profile',
        icon: '../../../assets/icons/myProfile.svg',
        goldenIcon: '../../../assets/icons/golden-profile.svg',
        showIcon: true,
        isOpen: false,
        isHovered: false,
        showSubMenu: false,
        route: 'my-profile',
        subMenu: [{ title: 'Item 1', icon: '', route: 'my-profile/item1', isHovered: false }],
      },
      {
        title: 'Portal Settings',
        icon: '../../../assets/icons/settings.svg',
        goldenIcon: '../../../assets/icons/golden-setting.svg',
        showIcon: true,
        isOpen: false,
        isHovered: false,
        showSubMenu: false,
        route: 'portal-settings',
        subMenu: [{ title: 'Item 1', icon: '', route: 'portal-settings/item1', isHovered: false }],
      },
      {
        title: 'Admin Reports',
        icon: '../../../assets/icons/reports.svg',
        goldenIcon: '../../../assets/icons/golden-report.svg',
        showIcon: true,
        isOpen: false,
        isHovered: false,
        showSubMenu: false,
        route: 'admin-reports',
        subMenu: [{ title: 'Item 1', icon: '', route: 'admin-reports/item1', isHovered: false }],
      },
    ];
  }
  
}
