import React from "react";
import {List, Item} from "./styles";

const SidebarItem = ({elem, fullSidebar, setCurrentCategory}) => {
  const {category, icon: Icon} = elem;

  const handleItemClick = () => {
    // dispatcher
    setCurrentCategory(category);
  };

  return (
    <Item onClick={handleItemClick}>
      <div>
        {/* Icon Component */}
        <Icon />
      </div>

      { fullSidebar &&
        <span>{category}</span>
      }
    </Item>
  );
};

const SidebarItems = ({categories, fullSidebar, setCurrentCategory}) => {
  return (
    <List>

      { categories.length > 0 &&
        categories.map(elem =>
        <SidebarItem
          // properties
          key={elem.id}
          elem={elem}
          fullSidebar={fullSidebar}
          // handlers
          setCurrentCategory={setCurrentCategory}
        />
      )}

    </List>
  );
};

export default SidebarItems;
