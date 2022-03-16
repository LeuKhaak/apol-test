import React from "react";
import * as styles from "./styles.module.scss";
import Row from "../../molecules/Row";
import Cell from "../../molecules/Cell";
import Loader from "../../atoms/Loader";

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
        <Cell content="№" cellStyle="cellTitle" />

        {headers.map((el) => (
          <div
            key={el[0]}
            style={{ cursor: "pointer" }}
            onClick={() => sortUsers(el[0])}
          >
            <Cell
              content={el[1]}
              cellStyle="cellTitle"
              cellContentStyle="simbol"
            />
          </div>
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
            editeUser={editeUser}
          />
        ))
      )}
    </div>
  );
}

export default Table;
