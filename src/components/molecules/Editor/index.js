import { React, useState, useEffect } from "react";
import * as styles from "./styles.module.scss";
import Cell from "../../molecules/Cell";
import Btn from "../../atoms/Btn";

function Editor({ number, data, editeUser, stopEdition, mode }) {
  const saveRowData = (id) => {
    editeUser(id, newData);
    stopEdition();
  };

  const saveRowDataForInput = (event, id) => {
    if (event.key === "Enter") {
      saveRowData(id);
    }
  };

  const shortData = [...data];
  shortData.shift();

  const [newData, setNewData] = useState(data);

  const edit = (ind, event) => {
    const arr = [...newData];
    arr[ind + 1].splice(1, 1, event.target.value);
    setNewData(arr);
  };

  useEffect(() => {
    setNewData(data);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mode]);

  return (
    <div
      className={styles.editor}
      style={{ display: mode !== "edite" ? "none" : "" }}
    >
      <Cell content={number} cellStyle="number" width="3rem" />
      <div className={styles.formWrapper}>
        <form className={styles.form}>
          {shortData &&
            shortData.map((el, ind) => (
              <div key={ind} className={styles.inputWrapper}>
                <input
                  name={el[0]}
                  value={newData[ind + 1][1]}
                  onChange={(event) => edit(ind, event)}
                  onKeyPress={(event) => saveRowDataForInput(event, data[0][1])}
                />
              </div>
            ))}
        </form>
      </div>
      <div className={styles.actions}>
        <Btn
          id={number}
          btnText="Save"
          btnStyle="edite"
          onClick={() => saveRowData(data[0][1])}
        />
        <Btn id={number} btnText="Delete" btnStyle="inactive" />
      </div>
    </div>
  );
}

export default Editor;
