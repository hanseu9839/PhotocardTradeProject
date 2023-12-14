const saleReducer = (state: any, action: any) => {
  switch (action.type) {
    case "SET_TITLE":
      return {
        ...state,
        title: action.text,
      };
    case "SET_CATEGORY":
      return {
        ...state,
        category: action.text,
      };
    case "SET_DESCRIPTION":
      return {
        ...state,
        description: action.text,
      };

    default:
      throw new Error("not action");
  }
};

export default saleReducer;
