import React from "react";
import * as styles from "./styles.module.scss";
import Row from "src/components/molecules/Row";
import Cell from "src/components/molecules/Cell";
import Loader from "src/components/atoms/Loader";

function Table({ data, deleteUser, editeUser, sortUsers, error, loader }) {
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
        <Cell content="SNO" />

        {headers.map((el) => (
          <div
            key={el[0]}
            style={{ cursor: "pointer" }}
            onClick={() => sortUsers(el[0])}
          >
            <Cell content={el[1]} cellStyle="simbol" />
          </div>
        ))}
        <Cell content="Actions" cellStyle="cellTitle" />
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
            editeUser={editeUser}
          />
        ))
      )}
    </div>
  );
}

export default Table;
