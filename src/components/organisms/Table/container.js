import { React } from "react";
import Table from "./component";
import { useSelector, useDispatch } from "react-redux";
import { actionUpdateData } from "src/store/actions/usersActions";

function TableContainer() {
  const dispatch = useDispatch();

  const usersList = useSelector((state) => state.users.usersList);
  const error = useSelector((state) => state.users.getError);
  const loader = useSelector((state) => state.users.loader);

  const deleteUser = (id) => {
    // eslint-disable-next-line no-restricted-globals
    const check = confirm("Are you sure?");
    if (!check) return;
    const list = [...usersList];
    const newList = list.filter((item) => item[0][1] !== id);
    dispatch(actionUpdateData(newList));
  };

  const editUser = (id, row) => {
    const list = [...usersList];
    const ind = list.findIndex((el) => el[0][1] === id);
    list.splice(ind, 1, row);
    dispatch(actionUpdateData(list));
  };

  const sortUsers = (arg) => {
    const list = [...usersList];
    const ind = list[0].findIndex((item) => item[0] === arg);
    list.sort((a, b) => (a[ind] > b[ind] ? 1 : -1));
    dispatch(actionUpdateData(list));
  };

  return (
    <Table
      data={usersList}
      deleteUser={deleteUser}
      editUser={editUser}
      sortUsers={sortUsers}
      error={error}
      loader={loader}
    />
  );
}

export const container = TableContainer;
