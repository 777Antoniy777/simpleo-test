import React from "react";
import PeopleIcon from '@material-ui/icons/People';
import BlurLinearIcon from '@material-ui/icons/BlurLinear';
import {List, Item} from "./styles";

const SidebarItem = ({elem, icon}) => {
  console.log(icon)
  return (
    <React.Fragment>
      
      <Item>{elem}</Item>
    </React.Fragment>
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
      icon: BlurLinearIcon,
    },
  ];

  return (
    <List>

      { arr.map(elem =>
        <SidebarItem
          // properties
          key={elem.category}
          elem={elem.category}
          icon={elem.icon}
        />
      )}

    </List>
  );
};

export default SidebarItems;
