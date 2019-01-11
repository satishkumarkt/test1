import { Injectable } from '@angular/core';

export interface BadgeItem {
  type: string;
  value: string;
}

export interface ChildrenItems {
  state: string;
  target?: boolean;
  name: string;
  type?: string;
  children?: ChildrenItems[];
}

export interface MainMenuItems {
  state: string;
  short_label?: string;
  main_state?: string;
  target?: boolean;
  name: string;
  type: string;
  icon: string;
  badge?: BadgeItem[];
  children?: ChildrenItems[];
}

export interface Menu {
  label: string;
  main: MainMenuItems[];
}

const MENUITEMS = [
  {
    label: 'Navigation',
    main: [
      {
        state: 'statistics',
        short_label: 'S',
        name: 'Dashboard Statistics',
        type: 'link',
        icon: 'fa fa-line-chart'
      },
      {
        state: 'onboarding',
        short_label: 'O',
        name: 'Onboarding',
        type: 'sub',
        icon: 'icofont-ui-user-group',
        children: [
          {
            state: 'manage-employees',
            name: 'Manage Employees'
          }, {
            state: 'manage-vendors',
            name: 'Manage Vendors'
          }, {
            state: 'batch-import',
            name: 'Batch Import'
          }
        ]
      },
      {
        state: 'outstanding-tasks',
        short_label: 'O',
        name: 'Outstanding Tasks',
        type: 'link',
        icon: 'icofont-tasks'
      },
      {
        state: 'results',
        short_label: 'R',
        name: 'Results',
        type: 'sub',
        icon: 'icofont-presentation',
        children: [
          {
            state: 'employee-results',
            name: 'Employee Results'
          },
          {
            state: 'vendor-results',
            name: 'Vendor Results'
          }
        ]
      }
    ]
  },
  {
    label: 'UI Element',
    main: [
      {
        state: 'reporting',
        short_label: 'R',
        name: 'Reporting',
        type: 'sub',
        icon: 'icofont-read-book',
        children: [
          {
            state: 'summary-reports',
            name: 'Summary Reports'
          },
          {
            state: 'detailed-reports',
            name: 'Detailed Reports'
          },
          {
            state: 'customised-report',
            name: 'Customised Report'
          }
        ]
      },
      {
        state: 'tools',
        short_label: 'T',
        name: 'Tools',
        type: 'sub',
        icon: 'fa fa-cog fa-spin',
        children: [
          {
            state: 'user-management',
            name: 'User Management'
          },
          {
            state: 'audit-trail',
            name: 'Audit Trail'
          },
          {
            state: 'downloads',
            name: 'Downloads'
          }
        ]
      },
      {
        state: 'internal-restricted-list',
        short_label: 'I',
        name: 'Internal Restricted List',
        type: 'link',
        icon: 'icofont-not-allowed'
      }
    ]
  }
];


@Injectable()
export class MenuItems {
  getAll(): Menu[] {
    return MENUITEMS;
  }
}
