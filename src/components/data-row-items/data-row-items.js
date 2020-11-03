import React from "react";
import {TableRow} from "../data/styles";
import {TableCell} from "./styles";

const DataRowItem = ({elem}) => {
  return (
    <TableRow className="contains-row">
      <TableCell>1</TableCell>
      <TableCell className="buttons-cell">
        <span>{elem}</span>

        <div className="buttons-wrapper">
          <button className="button button-edit" type="button"></button>
          <button className="button button-delete" type="button"></button>
        </div>
      </TableCell>
    </TableRow>
  );
};

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
