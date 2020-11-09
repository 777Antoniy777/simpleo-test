import React from "react";
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {getCategories} from "../../selectors/categories/selectors";
import {CategoriesActionCreator} from "../../actions/categories/action-creator";
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
    const {categories, setCurrentCategory} = this.props;
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
          categories={categories}
          fullSidebar={fullSidebar}
          // handlers
          setCurrentCategory={setCurrentCategory}
        />

        <Button type="button" aria-label={fullSidebar ? "Close filter" : "Open filter"} onClick={this.handleButtonClick}>
          {/* Icon Component */}
          <KeyboardBackspaceIcon style={fullSidebar ? arrowIconStyle: reversedArrowIconStyle} />
        </Button>
      </Wrapper>
    );
  }
}

Sidebar.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      category: PropTypes.string,
    }),
  ),
  setCurrentCategory: PropTypes.func,
};

const mapStateToProps = (state) => ({
  categories: getCategories(state),
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentCategory: (category) => {
    dispatch(CategoriesActionCreator.setCurrentCategory(category));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Sidebar);
