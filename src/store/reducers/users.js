import {
  START_DATA,
  GET_ERROR,
  SHOW_LOADER,
  UPDATE_DATA,
} from "../actionTypes/actionTypesNames";

const initialState = {
  usersList: [],
  loader: false,
  getError: null,
};

function loadUsers(state = initialState, action) {
  switch (action.type) {
    case START_DATA:
      return {
        ...state,
        usersList: action.usersList,
      };
    case UPDATE_DATA:
      return {
        ...state,
        usersList: action.usersList,
      };
    case SHOW_LOADER:
      return {
        ...state,
        loader: action.loader,
      };
    case GET_ERROR:
      return {
        ...state,
        getError: action,
      };
    default:
      return state;
  }
}
export default loadUsers;
