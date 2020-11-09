import React from "react";
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {getTemperatureData, getTemperatureRequestData} from "../../selectors/temperature/selectors";
import {getUsersData, getUsersRequestData} from "../../selectors/users/selectors";
import {getCurrentCategory, getCategoriesRequestData} from "../../selectors/categories/selectors";
import {TemperatureAsyncActionCreator} from "../../actions/temperature/async-action-creator";
import {UsersAsyncActionCreator} from "../../actions/users/async-action-creator";
import {Wrapper, TableWrapper, Table, TableRow, TableTitle} from "./styles";
import DataRowItems from "../data-row-items/data-row-items";
import Error from "../error/error";

const Data = ({temperature, users, currentCategory, categoriesRequestData,  usersRequestData, temperatureRequestData, editTemperature, deleteTemperature, editUser, deleteUser}) => {
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

        { categoriesRequestData.status === 200 &&
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

              {/* Error message */}
              <Error
                // properies
                requestData={[usersRequestData, temperatureRequestData]}
              />
            </tbody>
          </Table>
        }

        {/* Error message */}
        <Error
          // properies
          requestData={[categoriesRequestData]}
        />

      </TableWrapper>
    </Wrapper>
  );
};

Data.propTypes = {
  temperature: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      data: PropTypes.string,
    }),
  ),
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      data: PropTypes.string,
      password: PropTypes.string,
    }),
  ),
  currentCategory: PropTypes.string,
  categoriesRequestData: PropTypes.shape({
    status: PropTypes.oneOfType([
      PropTypes.number,
      null,
    ]),
    message: PropTypes.string,
  }),
  usersRequestData: PropTypes.shape({
    status: PropTypes.oneOfType([
      PropTypes.number,
      null,
    ]),
    message: PropTypes.string,
  }),
  temperatureRequestData: PropTypes.shape({
    status: PropTypes.oneOfType([
      PropTypes.number,
      null,
    ]),
    message: PropTypes.string,
  }),
  editTemperature: PropTypes.func,
  deleteTemperature: PropTypes.func,
  editUser: PropTypes.func,
  deleteUser: PropTypes.func,
};

const mapStateToProps = (state) => ({
  temperature: getTemperatureData(state),
  users: getUsersData(state),
  currentCategory: getCurrentCategory(state),
  categoriesRequestData: getCategoriesRequestData(state),
  usersRequestData: getUsersRequestData(state),
  temperatureRequestData: getTemperatureRequestData(state),
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
