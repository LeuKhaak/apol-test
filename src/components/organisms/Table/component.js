import React from "react";
import * as styles from "./styles.module.scss";
import Row from "../Row";
import TableTitle from "../../molecules/TableTitle/index";
import Cell from "../../molecules/Cell";
import Loader from "../../atoms/Loader";

function Table({ data, deleteUser, editUser, sortUsers, error, loader }) {
  const headers = [
    ["email", "Email"],
    ["firstName", "First Name"],
    ["lastName", "Last Name"],
    ["position", "Position"],
    ["project", "Project Name"],
    ["longitude", "Longitude"],
    ["latitude", "Latitude"],
  ];
  return (
    <div className={styles.table}>
      <div className={styles.tableTitles}>
        <Cell content="№" cellStyle="cellTitle" />

        {headers.map((el) => (
          <TableTitle key={el[0]} el={el} sortUsers={sortUsers} />
        ))}
        <div className={styles.actionsTitleWrapper}>
          <Cell content="Actions" cellStyle="cellTitleActions" />
        </div>
      </div>
      {error ? (
        <div className={styles.error}>"The request failed!"</div>
      ) : loader ? (
        <Loader loader />
      ) : (
        data &&
        data.map((el, ind) => (
          <Row
            key={ind}
            number={ind + 1}
            data={el}
            deleteUser={deleteUser}
            editUser={editUser}
          />
        ))
      )}
    </div>
  );
}

export default Table;
