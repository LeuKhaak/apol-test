import { React, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import Main from "./component";
import { useSelector, useDispatch } from "react-redux";
import {
  actionGetStartData,
  actionUpdateData,
} from "src/store/actions/usersActions";

function MainContainer() {
  const dispatch = useDispatch();

  const usersList = useSelector((state) => state.users.usersList);

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
      const list = [...usersList];
      const newList = list.filter((item) =>
        forFilter(item).includes(filterWord)
      );
      dispatch(actionUpdateData(newList));
    }
  };

  const addRow = () => {
    const newList = [...usersList];
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
    const userslist = localStorage.getItem("usersList");
    if (userslist) {
      dispatch(actionUpdateData(JSON.parse(userslist)));
    } else dispatch(actionGetStartData());
  };

  const submit = () => {
    window.localStorage.setItem("usersList", JSON.stringify(usersList));
  };

  const exportData = () => {
    const data = JSON.stringify(usersList);
    const link = document.createElement("a");
    link.download = "users.json";

    const blob = new Blob([data], { type: "text/plain" });
    link.href = URL.createObjectURL(blob);
    link.click();
    URL.revokeObjectURL(link.href);
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
      filter={filter}
      filterWord={filterWord}
      type={type}
      submit={submit}
      exportData={exportData}
    />
  );
}

export const container = MainContainer;
