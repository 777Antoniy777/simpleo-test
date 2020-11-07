import React from "react";
import {connect} from "react-redux";
import {getTemperatureData} from "../../selectors/temperature/selectors";
import {getUsersData} from "../../selectors/users/selectors";
import {getCurrentCategory} from "../../selectors/categories/selectors";
import {TemperatureAsyncActionCreator} from "../../actions/temperature/async-action-creator";
import {UsersAsyncActionCreator} from "../../actions/users/async-action-creator";
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
    dispatch(TemperatureAsyncActionCreator.editTemperature(data));
  },
  deleteTemperature: (data) => {
    dispatch(TemperatureAsyncActionCreator.deleteTemperature(data));
  },
  editUser: (data) => {
    dispatch(UsersAsyncActionCreator.editUser(data));
  },
  deleteUser: (data) => {
    dispatch(UsersAsyncActionCreator.deleteUser(data));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Data);
