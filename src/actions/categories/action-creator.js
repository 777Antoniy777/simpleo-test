const CategoriesActionType = {
  GET_CATEGORIES: 'GET_CATEGORIES',
  SET_CURRENT_CATEGORY: 'SET_CURRENT_CATEGORY',
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
};

export {CategoriesActionType, CategoriesActionCreator};
