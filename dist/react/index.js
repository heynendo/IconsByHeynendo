export { default as ArrowDown } from './ArrowDown.jsx';
export { default as Bell } from './Bell.jsx';
export { default as Close } from './Close.jsx';
export { default as Heart } from './Heart.jsx';
export { default as Home } from './Home.jsx';
export { default as Menu } from './Menu.jsx';
export { default as Plus } from './Plus.jsx';
export { default as Search } from './Search.jsx';
export { default as Settings } from './Settings.jsx';
export { default as Star } from './Star.jsx';
export { default as Trash } from './Trash.jsx';
export { default as User } from './User.jsx';

import ArrowDownImport from './ArrowDown.jsx';
import BellImport from './Bell.jsx';
import CloseImport from './Close.jsx';
import HeartImport from './Heart.jsx';
import HomeImport from './Home.jsx';
import MenuImport from './Menu.jsx';
import PlusImport from './Plus.jsx';
import SearchImport from './Search.jsx';
import SettingsImport from './Settings.jsx';
import StarImport from './Star.jsx';
import TrashImport from './Trash.jsx';
import UserImport from './User.jsx';

export function searchIcons(query) {
  const q = query.toLowerCase();
  const icons = [
    { name: 'ArrowDown', component: ArrowDownImport },
    { name: 'Bell', component: BellImport },
    { name: 'Close', component: CloseImport },
    { name: 'Heart', component: HeartImport },
    { name: 'Home', component: HomeImport },
    { name: 'Menu', component: MenuImport },
    { name: 'Plus', component: PlusImport },
    { name: 'Search', component: SearchImport },
    { name: 'Settings', component: SettingsImport },
    { name: 'Star', component: StarImport },
    { name: 'Trash', component: TrashImport },
    { name: 'User', component: UserImport },
  ];

  return icons.filter(({ name, component }) => {
    if (!component.tags) return false;
    return component.tags.some(tag => tag.toLowerCase().includes(q)) || 
           name.toLowerCase().includes(q);
  }).map(({ name, component }) => ({
    name,
    component,
    tags: component.tags
  }));
}