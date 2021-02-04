const initialState = {
  login: [],
};

const LoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_NEW_CUSTOMER":
      console.log("added");
      return {
        ...state,
        login: [
          ...state.login,
          {
            name: action.payload.name,
            contact: action.payload.contact,
            password: action.payload.password,
          },
        ],
      };

    default:
      return state;
  }
};

export default LoginReducer;
