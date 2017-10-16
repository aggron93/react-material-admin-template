import React from 'react';
import Assessment from 'material-ui/svg-icons/action/assessment';
import GridOn from 'material-ui/svg-icons/image/grid-on';
import PermIdentity from 'material-ui/svg-icons/action/perm-identity';
import Web from 'material-ui/svg-icons/av/web';
import {cyan600, pink600, purple600} from 'material-ui/styles/colors';
import ExpandLess from 'material-ui/svg-icons/navigation/expand-less';
import ExpandMore from 'material-ui/svg-icons/navigation/expand-more';
import ChevronRight from 'material-ui/svg-icons/navigation/chevron-right';

const data = {
  menus: [
    { text: 'DashBoard', icon: <Assessment/>, link: '/dashboard' },
    { text: 'Users', icon: <GridOn/>, link: '/users' },
    { text: 'Company', icon: <GridOn/>, link: '/company' },    
    { text: 'Login Page', icon: <PermIdentity/>, link: '/login' }
  ],
  users: {
    items: [
      {id: 1, name: 'Arun', age: '23', university: 'MMU'},
      {id: 2, name: 'Meng Hao', age: '24', university: 'MMU'}
    ]
  },
  company: {
    items: [
      {id: 1, name: 'Tealive', industry: 'F&B'},
      {id: 2, name: 'UOA', industry: 'Construction'}
    ]
  },
  dashBoardPage: {
    recentEvents: [
      {id: 1, title: 'Universitea', text: 'Organised by Tealive'},

    ],
    monthlySales: [
      {name: 'Jan', uv: 3700},
      {name: 'Feb', uv: 3000},
      {name: 'Mar', uv: 2000},
      {name: 'Apr', uv: 2780},
      {name: 'May', uv: 2000},
      {name: 'Jun', uv: 1800},
      {name: 'Jul', uv: 2600},
      {name: 'Aug', uv: 2900},
      {name: 'Sep', uv: 3500},
      {name: 'Oct', uv: 3000},
      {name: 'Nov', uv: 2400},
      {name: 'Dec', uv: 2780}
    ],
    browserUsage: [
      {name: 'Chrome', value: 800, color: cyan600, icon: <ExpandMore/>},
      {name: 'Firefox', value: 300, color: pink600, icon: <ChevronRight/>},
      {name: 'Safari', value: 300, color: purple600, icon: <ExpandLess/>}
    ]
  }
};

export default data;
