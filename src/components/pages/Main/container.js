import React from "react";
import { v4 as uuidv4 } from "uuid";
import Main from "./component";
import { useSelector, useDispatch } from "react-redux";
import {
  actionGetStartData,
  actionUpdateData,
} from "src/store/actions/personsActions";

function MainContainer() {
  const dispatch = useDispatch();

  const personsList = useSelector((state) => state.persons.personsList);

  const addRow = () => {
    const newList = [...personsList];
    const emptyRow = [
      ["id", uuidv4()],
      ["email", ""],
      ["firstName", ""],
      ["lastName", ""],
      ["position", ""],
      ["project", ""],
      ["longitude", ""],
      ["latitude", ""],
    ];
    newList.push(emptyRow);
    dispatch(actionUpdateData(newList));
  };

  const getStartData = () => {
    dispatch(actionGetStartData());
  };

  return <Main getStartData={getStartData} addRow={addRow} />;
}

export default Main;
export const container = MainContainer;
