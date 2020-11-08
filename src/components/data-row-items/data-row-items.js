import React from "react";
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';
import {TableRow} from "../data/styles";
import {TableCell} from "./styles";

class DataRowItem extends React.PureComponent {
  state = {
    isEdit: false,
    itemData: this.props.elem,
  };

  componentDidUpdate(prevProps) {
    if (this.props.currentCategory !== prevProps.currentCategory) {
      this.setState({
        itemData: this.props.elem,
      });
    }
  }

  handleEditButtonClick = () => {
    const {index, currentCategory, editTemperature, editUser} = this.props;
    const {isEdit, itemData} = this.state;

    if (isEdit) {
      switch (currentCategory) {
        case 'temperature':
          // dispatcher
          editTemperature({
            item: itemData,
            index,
          });
          break;

        case 'users':
          // dispatcher
          editUser({
            item: itemData,
            index,
          });
          break;

        default:
          break;
      }
    }

    this.setState((prevState) => ({
      isEdit: !prevState.isEdit,
    }));
  }

  handleDeleteButtonClick = () => {
    const {elem, index, currentCategory, deleteTemperature, deleteUser} = this.props;
    const {isEdit, itemData} = this.state;

    if (isEdit) {
      this.setState((prevState) => ({
        isEdit: !prevState.isEdit,
        itemData: elem,
      }));
    } else {
      switch (currentCategory) {
        case 'temperature':
          // dispatcher
          deleteTemperature({
            item: itemData,
            index,
          });
          break;

        case 'users':
          // dispatcher
          deleteUser({
            item: itemData,
            index,
          });
          break;

        default:
          break;
      }
    }
  };

  handleInputChange = (evt) => {
    const {elem} = this.props;
    const target = evt.target;
    const value = target.value;

    const newElem = {
      ...elem,
      data: value,
    };

    this.setState({
      itemData: newElem,
    });
  }

  render() {
    const {elem} = this.props;
    const {isEdit, itemData} = this.state;
    const {id, data} = elem;
    const {data: newData} = itemData;

    const iconStyle = {
      color: 'gray',
    };

    return (
      <TableRow className="contains-row">
        <TableCell>{id}</TableCell>
        <TableCell className="buttons-cell">

          { isEdit
            ? <input type="text" name="data" value={newData} aria-label="Edit data" onChange={this.handleInputChange} />
            : <span>{data}</span>
          }

          <div className="buttons-wrapper">
            <button className="button" type="button" aria-label={isEdit ? "Apply changes" : "Edit data"} onClick={this.handleEditButtonClick}>

              {/* Icon Component */}
              { isEdit
                ? <CheckIcon style={iconStyle} />
                : <EditIcon style={iconStyle} />
              }

            </button>
            <button className="button" type="button" aria-label={isEdit ? "Discard changes" : "Delete data"} onClick={this.handleDeleteButtonClick}>

              {/* Icon Component */}
              { isEdit
                ? <CloseIcon style={iconStyle} />
                : <DeleteIcon style={iconStyle} />
              }

            </button>
          </div>
        </TableCell>
      </TableRow>
    );
  }
}

const DataRowItems = ({users, temperature, currentCategory, editTemperature, deleteTemperature, editUser, deleteUser}) => {
  const setData = () => {
    let data = [];

    switch (currentCategory) {
      case 'temperature':
        data = temperature;
        break;

      case 'users':
        data = users;
        break;

      default:
        break;
    }

    return data;
  }

  const data = setData();

  return (
    <React.Fragment>
      { data.length > 0 &&
        data.map((elem, i) =>
        <DataRowItem
          // properties
          key={elem.id}
          elem={elem}
          index={i}
          currentCategory={currentCategory}
          // handlers
          editTemperature={editTemperature}
          deleteTemperature={deleteTemperature}
          editUser={editUser}
          deleteUser={deleteUser}
        />
      )}
    </React.Fragment>
  );
};

export default DataRowItems;
