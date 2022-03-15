import { React, useState, useEffect } from "react";
import Main from "./component";
import { useSelector, useDispatch } from "react-redux";
import {
  actionGetStartData,
  actionUpdateData,
} from "src/store/actions/usersActions";
import { prepareDataForFilter } from "./mainUtils/prepareDataForFilter";
import { exportData } from "./mainUtils/exportData";
import { createEmptyRow } from "./mainUtils/createEmptyRow";

function MainContainer() {
  const dispatch = useDispatch();

  const usersList = useSelector((state) => state.users.usersList);

  const [filterWord, setFilterWord] = useState("");

  const type = (event) => {
    setFilterWord(event.target.value);
  };

  const applyFilter = (event) => {
    if (event.key === "Enter") {
      const list = [...usersList];
      const newList = list.filter((item) =>
        prepareDataForFilter(item).includes(filterWord)
      );
      dispatch(actionUpdateData(newList));
    }
  };

  const addRow = () => {
    const newList = [...usersList];
    const emptyRow = createEmptyRow(usersList);
    newList.push(emptyRow);
    dispatch(actionUpdateData(newList));
  };

  const getStartData = () => {
    const userslist = localStorage.getItem("usersList");
    if (userslist) {
      dispatch(actionUpdateData(JSON.parse(userslist)));
    } else dispatch(actionGetStartData());
  };

  const submit = () => {
    window.localStorage.setItem("usersList", JSON.stringify(usersList));
  };

  useEffect(() => {
    const userslist = localStorage.getItem("usersList");
    if (userslist) {
      dispatch(actionUpdateData(JSON.parse(userslist)));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Main
      getStartData={getStartData}
      addRow={addRow}
      filter={applyFilter}
      filterWord={filterWord}
      type={type}
      submit={submit}
      exportData={exportData}
      usersList={usersList}
    />
  );
}

export const container = MainContainer;
