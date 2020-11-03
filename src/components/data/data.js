import React from "react";
import {Wrapper, TableWrapper, Table, TableRow, TableTitle} from "./styles";
import DataRowItems from "../data-row-items/data-row-items";

const Data = () => {
  return (
    <Wrapper>
      <TableWrapper>
        <Table>
          <tbody>
            <TableRow>
              <TableTitle>Id</TableTitle>
              <TableTitle>Degree</TableTitle>
            </TableRow>

            {/* Data rows */}
            <DataRowItems />
          </tbody>
        </Table>
      </TableWrapper>
    </Wrapper>
  );
};

export default Data;
