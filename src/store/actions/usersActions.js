import {
  START_DATA,
  GET_ERROR,
  SHOW_LOADER,
  UPDATE_DATA,
} from "../actionTypes/actionTypesNames";
import Repository from "../../repository";

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
  const newValue = [];
  value.forEach((el) => {
    const dataList = Object.entries(el);
    const firstName = dataList[2][1] ? dataList[2][1].split(" ")[0] : "";
    const lastNameFirstLetter = dataList[2][1].split(" ")[1][0];
    dataList.splice(
      2,
      1,
      ["firstName", firstName],
      ["lastName", lastNameFirstLetter]
    );
    newValue.push(dataList);
  });
  dispatch(startData(newValue));
  setTimeout(() => dispatch(showLoader(false)), 500);
  //dispatch(showLoader(false));
};
