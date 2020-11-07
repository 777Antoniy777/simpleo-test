const getCategories = (state) => {
  return state.categories.categories;
};

const getCurrentCategory = (state) => {
  return state.categories.currentCategory;
};

const getCategoriesRequestData = (state) => {
  return state.categories.requestData;
};

export {getCategories, getCurrentCategory, getCategoriesRequestData};
