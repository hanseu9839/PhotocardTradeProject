const userReducer = (state: any, action: any) => {
  switch (action.type) {
    case "SET_USERID":
      return {
        ...state,
        userid: action.text,
      };
    case "SET_USEREMAIL": {
      return {
        ...state,
        useremail: action.text,
      };
    }
    case "SET_PASSWORD": {
      return {
        ...state,
        password: action.text,
      };
    }
    case "SET_PHONENUMBER": {
      return {
        ...state,
        phonenumber: action.text,
      };
    }
    default:
      throw new Error("not action");
  }
};

export default userReducer;
