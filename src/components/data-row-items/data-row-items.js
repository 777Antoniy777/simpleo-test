import React from "react";
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import {TableRow} from "../data/styles";
import {TableCell} from "./styles";

class DataRowItem extends React.PureComponent {
  state = {
    isEdit: false,
  };

  render() {
    const {elem} = this.props;

    const iconStyle = {
      color: 'gray',
    };

    return (
      <TableRow className="contains-row">
        <TableCell>1</TableCell>
        <TableCell className="buttons-cell">
          <span>{elem}</span>

          <div className="buttons-wrapper">
            <button className="button" type="button" aria-label="Edit data">
              {/* Icon Component */}
              <EditIcon style={iconStyle} />
            </button>
            <button className="button" type="button" aria-label="Delete data">
              {/* Icon Component */}
              <DeleteIcon style={iconStyle} />
            </button>
          </div>
        </TableCell>
      </TableRow>
    );
  }
}

const DataRowItems = () => {
  return (
    <React.Fragment>
      { [6, 12].map(elem =>
        <DataRowItem
          // properties
          key={elem}
          elem={elem}
        />
      )}
    </React.Fragment>
  );
};

export default DataRowItems;
