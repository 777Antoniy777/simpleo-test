const getUsersData = (state) => {
  return state.users.users;
};

const getUsersRequestData = (state) => {
  return state.users.requestData;
};

export {getUsersData, getUsersRequestData};
