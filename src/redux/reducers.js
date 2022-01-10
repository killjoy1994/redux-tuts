const initialState = {
  count: 0,
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "counter/increment":
      return {
        ...state,
        count: state.count + 1,
      };
    case "counter/decrement":
      return {
        ...state,
        count: state.count - 1,
      };
    case "counter/set-number":
      return {
        ...state,
        count: action.payload,
      };
    default:
      return state;
  }
};

export default counterReducer;
