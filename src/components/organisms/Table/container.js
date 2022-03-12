import { React } from "react";
import Table from "./component";
import { useSelector, useDispatch } from "react-redux";
import { actionUpdateData } from "src/store/actions/personsActions";

function TableContainer() {
  const dispatch = useDispatch();

  const personsList = useSelector((state) => state.persons.personsList);

  const deletePerson = (id) => {
    // eslint-disable-next-line no-restricted-globals
    const check = confirm("Are you sure?");
    if (!check) return;
    const list = [...personsList];
    const newList = list.filter((item) => item[0][1] !== id);
    dispatch(actionUpdateData(newList));
  };

  const editePerson = (ind, row) => {
    const list = [...personsList];
    list.splice(ind, 1, row);

    dispatch(actionUpdateData(list));
  };

  const sortPersons = (arg) => {
    const list = [...personsList];
    const ind = list[0].findIndex((item) => item[0] === arg);
    list.sort((a, b) => (a[ind] > b[ind] ? 1 : -1));

    dispatch(actionUpdateData(list));
  }; // list.sort((a, b) => (a.color > b.color) ? 1 : -1)

  return (
    <Table
      data={personsList}
      deletePerson={deletePerson}
      editePerson={editePerson}
      sortPersons={sortPersons}
    />
  );
}

export const container = TableContainer;
