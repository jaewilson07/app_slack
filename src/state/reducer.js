export const initialState = {
  currentUser: null,
};

export const actionTypes = {
  SET_USER: 'SET_USER',
};

export const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case actionTypes.SET_USER:
      return {
        ...state,
        currentUser: action.payload,
      };
    default:
      return state;
  }
};
