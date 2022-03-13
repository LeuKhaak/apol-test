import { React, useState } from "react";
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

  const [filterWord, setFilterWord] = useState("");
  const type = (event) => {
    setFilterWord(event.target.value);
  };

  const forFilter = (arr) => {
    const x = Object.fromEntries(arr);
    const newArr = Object.values(x);
    return newArr;
  };

  const filter = (event) => {
    if (event.key === "Enter") {
      const list = [...personsList];
      const newList = list.filter((item) =>
        forFilter(item).includes(filterWord)
      );
      dispatch(actionUpdateData(newList));
    }
  };

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

  return (
    <Main
      getStartData={getStartData}
      addRow={addRow}
      filter={filter}
      filterWord={filterWord}
      type={type}
    />
  );
}

export default Main;
export const container = MainContainer;
