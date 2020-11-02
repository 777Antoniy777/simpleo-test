import React from "react";
import {Wrapper, Button} from "./styles";
import SidebarItems from "../sidebar-items/sidebar-items";

const Sidebar = () => {
  return (
    <Wrapper>

      {/* Categories list */}
      <SidebarItems />

      <Button type="button" aria-label="Close filter"></Button>
    </Wrapper>
  );
};

export default Sidebar;
