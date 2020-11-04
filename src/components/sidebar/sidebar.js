import React from "react";
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import {Wrapper, Button} from "./styles";
import SidebarItems from "../sidebar-items/sidebar-items";

class Sidebar extends React.PureComponent {
  state = {
    fullSidebar: false,
  };

  handleButtonClick = () => {
    this.setState((prevState) => ({
      fullSidebar: !prevState.fullSidebar,
    }));
  }

  render() {
    const {fullSidebar} = this.state;

    const arrowIconStyle = {
      color: "white",
    };

    const reversedArrowIconStyle = {
      color: "white",
      transform: "rotate(180deg)",
    };

    return (
      <Wrapper fullsidebar={fullSidebar}>

        {/* Categories list */}
        <SidebarItems
          // properties
          fullSidebar={fullSidebar}
        />

        <Button type="button" aria-label={fullSidebar ? "Close filter" : "Open filter"} onClick={this.handleButtonClick}>
          {/* Icon Component */}
          <KeyboardBackspaceIcon style={fullSidebar ? arrowIconStyle: reversedArrowIconStyle} />
        </Button>
      </Wrapper>
    );
  }
}

export default Sidebar;
