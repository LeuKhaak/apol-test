import React from "react";
import * as styles from "./styles.module.scss";
import Row from "src/components/molecules/Row";
import Cell from "src/components/molecules/Cell";

function Table({ data, deletePerson, editePerson, sortPersons }) {
  return (
    <div className={styles.table}>
      <div className={styles.tableTitles}>
        <Cell content="SNO" cellStyle="cellTitle" />
        <div style={{ cursor: "pointer" }} onClick={() => sortPersons("email")}>
          <Cell content="Email" cellStyle="cellTitle" />
        </div>
        <div
          style={{ cursor: "pointer" }}
          onClick={() => sortPersons("firstName")}
        >
          <Cell content="First Name" cellStyle="cellTitle" />
        </div>
        <div
          style={{ cursor: "pointer" }}
          onClick={() => sortPersons("lastName")}
        >
          <Cell content="Last Name" cellStyle="cellTitle" />
        </div>
        <div
          style={{ cursor: "pointer" }}
          onClick={() => sortPersons("position")}
        >
          <Cell content="Position" cellStyle="cellTitle" />
        </div>
        <div
          style={{ cursor: "pointer" }}
          onClick={() => sortPersons("project")}
        >
          <Cell content="Project Name" cellStyle="cellTitle" />
        </div>
        <div
          style={{ cursor: "pointer" }}
          onClick={() => sortPersons("longitude")}
        >
          <Cell content="Longitude" cellStyle="cellTitle" />
        </div>
        <div
          style={{ cursor: "pointer" }}
          onClick={() => sortPersons("latitude")}
        >
          <Cell content="Latitude" cellStyle="cellTitle" />
        </div>
        <Cell content="Actions" cellStyle="cellTitle" />
      </div>

      {data &&
        data.map((el, ind) => (
          <Row
            key={ind}
            number={ind + 1}
            data={el}
            deletePerson={deletePerson}
            editePerson={editePerson}
          />
        ))}
    </div>
  );
}

export default Table;
