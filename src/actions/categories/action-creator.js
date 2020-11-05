const CategoriesActionType = {
  SET_CURRENT_CATEGORY: 'SET_CURRENT_CATEGORY',
};

const CategoriesActionCreator = {
  setCurrentCategory: (type) => ({
    type: CategoriesActionType.SET_CURRENT_CATEGORY,
    payload: type,
  }),
};

export {CategoriesActionType, CategoriesActionCreator};
