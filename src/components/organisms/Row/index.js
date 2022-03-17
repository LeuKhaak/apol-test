import React, { useState } from "react";
import * as styles from "./styles.module.scss";
import Cell from "../../molecules/Cell";
import Btn from "../../atoms/Btn";
import Editor from "../Editor";

function Row({ number, data, deleteUser, editUser }) {
  const [mode, setMode] = useState("usial");

  const startEdition = () => {
    setMode("edit");
  };

  const stopEdition = () => {
    setMode("usial");
  };

  const withoutID = [...data];
  withoutID.shift();

  return (
    <div>
      <div
        className={styles.row}
        style={{ display: mode === "edit" ? "none" : "" }}
      >
        <Cell content={number} cellStyle="number" width="3rem" />
        {withoutID &&
          withoutID.map((el, ind) => (
            <Cell key={ind} content={el[1]} id={el[0]} mode={mode} />
          ))}
        <div className={styles.actions}>
          <Btn
            id={data[0][1]}
            btnText="Edit"
            btnStyle="edit"
            onClick={startEdition}
          />
          <Btn
            id={data[0][1]}
            btnText="Delete"
            btnStyle="delete"
            onClick={deleteUser}
          />
        </div>
      </div>
      <Editor
        data={data}
        mode={mode}
        number={number}
        editUser={editUser}
        stopEdition={stopEdition}
        deleteUser={deleteUser}
      />
    </div>
  );
}

export default Row;
