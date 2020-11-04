import React from "react";
import PeopleIcon from '@material-ui/icons/People';
import ListAltIcon from '@material-ui/icons/ListAlt';
import {List, Item} from "./styles";

const SidebarItem = ({elem, Icon, fullSidebar}) => {
  return (
    <Item>
      <div>
        {/* Icon Component */}
        <Icon />
      </div>

      { fullSidebar &&
        <span>{elem}</span>
      }
    </Item>
  );
};

const SidebarItems = ({fullSidebar}) => {
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
          fullSidebar={fullSidebar}
        />
      )}

    </List>
  );
};

export default SidebarItems;
