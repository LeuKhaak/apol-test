import {
  START_DATA,
  GET_ERROR,
  SHOW_LOADER,
  UPDATE_DATA,
} from "../actionTypes/actionTypesNames";
import Repository from "../../repository";
import { transformData } from "../helpers/transformData";

export function showLoader(value) {
  return { type: SHOW_LOADER, loader: value };
}

export function getError(value) {
  return { type: GET_ERROR, value };
}

export function startData(value) {
  return { type: START_DATA, usersList: value };
}

export function actionUpdateData(value) {
  return { type: UPDATE_DATA, usersList: value };
}

export const actionGetStartData = () => async (dispatch) => {
  dispatch(showLoader(true));
  const { value, error } = await Repository.APIstartData.getStartData();
  if (error || !value) {
    dispatch(getError(true));
    dispatch(showLoader(false));
  }

  const newValue = transformData(value);

  dispatch(startData(newValue));
  setTimeout(() => dispatch(showLoader(false)), 500);
};
