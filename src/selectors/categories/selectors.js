const getCategories = (state) => {
  return state.categories.categories;
};

const getCurrentCategory = (state) => {
  return state.categories.currentCategory;
};

export {getCategories, getCurrentCategory};
