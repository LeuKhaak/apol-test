import { React, useState } from "react";
import * as styles from "./styles.module.scss";
import Cell from "src/components//molecules/Cell/index";
import Btn from "src/components/atoms/Btn";

function Row({ number, data, deletePerson, editePerson }) {
  const [mode, setMode] = useState("usial");

  const startEdition = () => {
    setMode("edite");
  };

  const saveRowData = (event, id, value) => {
    if (event.key === "Enter") {
      const newData = [...data];
      newData.forEach((item) => {
        if (item[0] === id) {
          item[1] = value;
        }
      });
      editePerson(number - 1, newData);

      // eslint-disable-next-line no-restricted-globals
      const checkFinish = confirm("Are you finish editing?");
      if (!checkFinish) return;
      setMode("usial");
    }
  };

  const withoutID = [...data];
  withoutID.shift();

  return (
    <div className={styles.row}>
      <Cell content={number} cellStyle="number" width="3rem" />
      {withoutID &&
        withoutID.map((el, ind) => (
          <Cell
            key={ind}
            content={el[1]}
            id={el[0]}
            mode={mode}
            saveRowData={saveRowData}
          />
        ))}
      <div className={styles.actions}>
        <Btn
          id={number}
          btnText="Edite"
          btnStyle="edite"
          onClick={() => startEdition(data, data.id)}
        />
        <Btn
          id={number}
          btnText="Delete"
          btnStyle="delete"
          onClick={() => deletePerson(data[0][1])}
        />
      </div>
    </div>
  );
}

export default Row;
