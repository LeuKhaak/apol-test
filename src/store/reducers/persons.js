import {
  START_DATA,
  GET_ERROR,
  SHOW_LOADER,
  UPDATE_DATA,
} from "../actionTypes/actionTypesNames";

const initialState = {
  personsList: [],
  loader: false,
  getError: null,
};

function loadCards(state = initialState, action) {
  switch (action.type) {
    case START_DATA:
      return {
        ...state,
        personsList: action.personsList,
      };
    case UPDATE_DATA:
      return {
        ...state,
        personsList: action.personsList,
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
export default loadCards;
