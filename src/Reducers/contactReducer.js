import * as actionTypes from "../Actions/ActionTypes";

const contacts = (state = { data: [] }, action) => {
  switch (action.type) {
    case actionTypes.CREATE_NEW_CONTACT:
      debugger
      return {
        ...state,
        data: [...state.data, Object.assign({}, action.contact)],
      };
    // case actionTypes.REMOVE_CONTACT:
      
    //   return {
    //     ...state,
    //     data: [...state.data.filter((data, i) => i !== action.id)],
    //   };
    default:
      return state;
  }
};

export default contacts;
