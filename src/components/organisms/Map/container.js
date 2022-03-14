import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { actionUpdateData } from "src/store/actions/usersActions";
import MapPage from "./component";

function MapPageContainer() {
  const dispatch = useDispatch();

  const users = useSelector((state) => state.users.usersList);

  const changeCoords = (ind, lon, lat) => {
    const arr = [...users];
    arr[ind].splice(
      6,
      2,
      ["longitude", lon.toFixed(2)],
      ["latitude", lat.toFixed(2)]
    );
    console.log(arr);
    dispatch(actionUpdateData(arr));
  };

  return <MapPage usersList={users} changeCoords={changeCoords} />;
}

export const container = MapPageContainer;
