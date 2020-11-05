import React from "react";
import {connect} from "react-redux";
import {getTemperatureData} from "../../selectors/temperature/selectors";
import {getUsersData} from "../../selectors/users/selectors";
import {getCurrentCategory} from "../../selectors/categories/selectors";
import {TemperatureActionCreator} from "../../actions/temperature/action-creator";
import {UsersActionCreator} from "../../actions/users/action-creator";
import {Wrapper, TableWrapper, Table, TableRow, TableTitle} from "./styles";
import DataRowItems from "../data-row-items/data-row-items";

const Data = ({temperature, users, currentCategory, editTemperature, deleteTemperature, editUser, deleteUser}) => {
  const setTableTitle = () => {
    let title = null;

    switch (currentCategory) {
      case 'temperature':
        title = 'Degree';
        break;

      case 'users':
        title = 'Login';
        break;

      default:
        break;
    }

    return title;
  }

  return (
    <Wrapper>
      <TableWrapper>
        <Table>
          <tbody>
            <TableRow>
              <TableTitle>Id</TableTitle>
              <TableTitle>{setTableTitle()}</TableTitle>
            </TableRow>

            {/* Data rows */}
            <DataRowItems
              // properies
              temperature={temperature}
              users={users}
              currentCategory={currentCategory}
              // handlers
              editTemperature={editTemperature}
              deleteTemperature={deleteTemperature}
              editUser={editUser}
              deleteUser={deleteUser}
            />
          </tbody>
        </Table>
      </TableWrapper>
    </Wrapper>
  );
};

const mapStateToProps = (state) => ({
  temperature: getTemperatureData(state),
  users: getUsersData(state),
  currentCategory: getCurrentCategory(state),
});

const mapDispatchToProps = (dispatch) => ({
  editTemperature: (data) => {
    dispatch(TemperatureActionCreator.editTemperature(data));
  },
  deleteTemperature: (data) => {
    dispatch(TemperatureActionCreator.deleteTemperature(data));
  },
  editUser: (data) => {
    dispatch(UsersActionCreator.editUser(data));
  },
  deleteUser: (data) => {
    dispatch(UsersActionCreator.deleteUser(data));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Data);
