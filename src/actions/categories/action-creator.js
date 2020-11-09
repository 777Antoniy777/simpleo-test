const CategoriesActionType = {
  GET_CATEGORIES: 'GET_CATEGORIES',
  SET_CURRENT_CATEGORY: 'SET_CURRENT_CATEGORY',
  SET_CATEGORIES_REQUEST_DATA: 'SET_CATEGORIES_REQUEST_DATA',
};

const CategoriesActionCreator = {
  getCategories: (data) => ({
    type: CategoriesActionType.GET_CATEGORIES,
    payload: data,
  }),

  setCurrentCategory: (type) => ({
    type: CategoriesActionType.SET_CURRENT_CATEGORY,
    payload: type,
  }),

  setRequestData: (data) => ({
    type: CategoriesActionType.SET_CATEGORIES_REQUEST_DATA,
    payload: data,
  }),
};

export {CategoriesActionType, CategoriesActionCreator};
