import { React, useState } from "react";
import * as styles from "./styles.module.scss";
import Cell from "src/components//molecules/Cell";
import Btn from "src/components/atoms/Btn";
import Editor from "../Editor";

function Row({ number, data, deleteUser, editeUser }) {
  const [mode, setMode] = useState("usial");

  const startEdition = () => {
    setMode("edite");
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
        style={{ display: mode === "edite" ? "none" : "" }}
      >
        <Cell content={number} cellStyle="number" width="3rem" />
        {withoutID &&
          withoutID.map((el, ind) => (
            <Cell key={ind} content={el[1]} id={el[0]} mode={mode} />
          ))}
        <div className={styles.actions}>
          <Btn
            id={number}
            btnText="Edite"
            btnStyle="edite"
            onClick={() => startEdition()}
          />
          <Btn
            id={number}
            btnText="Delete"
            btnStyle="delete"
            onClick={() => deleteUser(data[0][1])}
          />
        </div>
      </div>
      <Editor
        data={data}
        mode={mode}
        number={number}
        editeUser={editeUser}
        stopEdition={stopEdition}
        deleteUser={deleteUser}
      />
    </div>
  );
}

export default Row;
