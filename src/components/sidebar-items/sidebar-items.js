import React from "react";
import {List, Item} from "./styles";

const SidebarItem = ({elem}) => {
  return (
    <Item>{elem}</Item>
  );
};

const SidebarItems = () => {
  return (
    <List>

      { ['Users', 'Temperature'].map(elem =>
        <SidebarItem
          // properties
          key={elem}
          elem={elem}
        />
      )}

    </List>
  );
};

export default SidebarItems;
