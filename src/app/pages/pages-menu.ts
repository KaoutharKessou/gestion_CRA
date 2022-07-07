import { NbMenuItem } from '@nebular/theme';
import { settings } from 'cluster';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Page d\'Acceuil',
    icon: 'home-outline',
    link: '/pages/dashboard',
    home: true,
  },
  {
    title: 'POINTAGE',
    group: true,
  },
  {
    title: 'HOPIAEVA',
    icon: 'clock-outline',
    url:'http://34.77.198.101/aevaweb/Logon/Logon.aspx'
  },
  {
    title: 'Guide CRA',
    group: true,
  },
  {
    title: 'Note CRA',
    icon: 'file-outline',
    url:'https://drive.google.com/file/d/1nU7ZnPH1Gt_jH83U8DnQM1mi4pE-HZbW/view'
  },
  {
    title: 'Gestion AEVAWEB',
    group: true,
  },
  {
    title: 'Gestion des Tâches',
    icon: 'list-outline',
    children: [
      {
        title: 'Rapport des Tâches',
        link: '/pages/tables/smart-table',
        icon: 'clipboard-outline',
      },
      {
        title: 'CRA Global',
        link: '/pages/tables/smart-table',
        icon: 'browser-outline',
      },
      {
        title: 'TCD',
        link: '/pages/tables/smart-table',
        icon: 'grid-outline',
      },
    ],
  },
  {
    title: 'Gestion des Utilisateurs',
    icon: 'person-outline',
    link: '/pages/tables/smart-table', 
  },
  {
    title: 'Gestion des Actions',
    icon: 'keypad-outline',
    link: '/pages/tables/smart-table',
  },
  {
    title: 'Gestion des Projets',
    icon: 'monitor-outline',
    children: [
      {
        title: 'Projets',
        link: '/pages/tables/smart-table',
        icon: 'monitor-outline',
      },
      {
        title: 'Sous-Projet',
        link: '/pages/tables/smart-table',
        icon: 'shuffle-2-outline',
      },
    ],
  },
  {
    title: 'JoursFériérs',
    icon: 'calendar-outline',
    link: '/pages/tables/JoursFerier', 
  },
  {
    title: 'Dialog',
    link: '/pages/modal-overlays/dialog',
  },
  {
    title: 'Buttons',
  link: '/pages/forms/buttons',
 },
 
  {
    title: 'Forms',
    icon: 'edit-2-outline',
    children: [
      {
        title: 'Form Inputs',
        link: '/pages/forms/inputs',
      },
      {
        title: 'Form Layouts',
        link: '/pages/forms/layouts',
      },
      {
         title: 'Buttons',
       link: '/pages/forms/buttons',
      },
      {
        title: 'Datepicker',
        link: '/pages/forms/datepicker',
      },
    ],
  },
  {
    title: 'UI Features',
    icon: 'keypad-outline',
    link: '/pages/ui-features',
    children: [
      {
        title: 'Grid',
        link: '/pages/ui-features/grid',
      },
      {
        title: 'Icons',
        link: '/pages/ui-features/icons',
      },
      {
        title: 'Typography',
        link: '/pages/ui-features/typography',
      },
      {
        title: 'Animated Searches',
        link: '/pages/ui-features/search-fields',
      },
    ],
  },
  {
    title: 'Modal & Overlays',
    icon: 'browser-outline',
    children: [
      {
        title: 'Dialog',
        link: '/pages/modal-overlays/dialog',
      },
      {
        title: 'Window',
        link: '/pages/modal-overlays/window',
      },
      {
        title: 'Popover',
        link: '/pages/modal-overlays/popover',
      },
      {
        title: 'Toastr',
        link: '/pages/modal-overlays/toastr',
      },
      {
        title: 'Tooltip',
        link: '/pages/modal-overlays/tooltip',
      },
    ],
  },
  {
    title: 'Extra Components',
    icon: 'message-circle-outline',
    children: [
      {
        title: 'Calendar',
        link: '/pages/extra-components/calendar',
      },
      {
        title: 'Progress Bar',
        link: '/pages/extra-components/progress-bar',
      },
      {
        title: 'Spinner',
        link: '/pages/extra-components/spinner',
      },
      {
        title: 'Alert',
        link: '/pages/extra-components/alert',
      },
      {
        title: 'Calendar Kit',
        link: '/pages/extra-components/calendar-kit',
      },
      {
        title: 'Chat',
        link: '/pages/extra-components/chat',
      },
    ],
  },
  {
    title: 'Maps',
    icon: 'map-outline',
    children: [
      {
        title: 'Google Maps',
        link: '/pages/maps/gmaps',
      },
      {
        title: 'Leaflet Maps',
        link: '/pages/maps/leaflet',
      },
      {
        title: 'Bubble Maps',
        link: '/pages/maps/bubble',
      },
      {
        title: 'Search Maps',
        link: '/pages/maps/searchmap',
      },
    ],
  },
  {
    title: 'Charts',
    icon: 'pie-chart-outline',
    children: [
      {
        title: 'Echarts',
        link: '/pages/charts/echarts',
      },
      {
        title: 'Charts.js',
        link: '/pages/charts/chartjs',
      },
      {
        title: 'D3',
        link: '/pages/charts/d3',
      },
    ],
  },
  {
    title: 'Editors',
    icon: 'text-outline',
    children: [
      {
        title: 'TinyMCE',
        link: '/pages/editors/tinymce',
      },
      {
        title: 'CKEditor',
        link: '/pages/editors/ckeditor',
      },
    ],
  },
  {
    title: 'Tables & Data',
    icon: 'grid-outline',
    children: [
      {
        title: 'Smart Table',
        link: '/pages/tables/smart-table',
      },
      {
        title: 'Tree Grid',
        link: '/pages/tables/tree-grid',
      },
    ],
  },
  {
    title: 'Miscellaneous',
    icon: 'shuffle-2-outline',
    children: [
      {
        title: '404',
        link: '/pages/miscellaneous/404',
      },
    ],
  },
  {
    title: 'Auth',
    icon: 'lock-outline',
    children: [
      {
        title: 'Login',
        link: '/auth/login',
      },
      {
        title: 'Register',
        link: '/auth/register',
      },
      {
        title: 'Request Password',
        link: '/auth/request-password',
      },
      {
        title: 'Reset Password',
        link: '/auth/reset-password',
      },
    ],
  },
  {
    title: 'Projets',
    icon: 'monitor-outline',
    children: [
      {
        title: 'Sous-Projet',
        link: '/pages/layout/stepper',
      },
    ],
  },
  {
    title: 'Utilisateurs',
    icon: 'person-outline',
    link: '/pages/iot-dashboard', 
  },
];
