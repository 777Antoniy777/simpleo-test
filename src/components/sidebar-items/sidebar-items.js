import React from "react";
import PeopleIcon from '@material-ui/icons/People';
import ListAltIcon from '@material-ui/icons/ListAlt';
import {List, Item} from "./styles";

const SidebarItem = ({elem, Icon}) => {
  return (
    <Item>
      {/* Icon Component */}
      <Icon />

      <span>{elem}</span>
    </Item>
  );
};

const SidebarItems = () => {
  const arr = [
    {
      category: 'Users',
      icon: PeopleIcon,
    },
    {
      category: 'Temperature',
      icon: ListAltIcon,
    },
  ];

  return (
    <List>

      { arr.map(elem =>
        <SidebarItem
          // properties
          key={elem.category}
          elem={elem.category}
          Icon={elem.icon}
        />
      )}

    </List>
  );
};

export default SidebarItems;
