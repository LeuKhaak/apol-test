import React, { useState, useEffect } from "react";
import * as styles from "./styles.module.scss";
import Cell from "../../molecules/Cell";
import Input from "../../molecules/Input";
import Btn from "../../atoms/Btn";

function Editor({ number, data, editUser, stopEdition, mode }) {
  const saveRowData = (id) => {
    editUser(id, newData);
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
      style={{ display: mode !== "edit" ? "none" : "" }}
    >
      <Cell content={number} cellStyle="number" width="3rem" />
      <div className={styles.formWrapper}>
        <form className={styles.form}>
          {shortData &&
            shortData.map((el, ind) => (
              <Input
                key={ind}
                ind={ind}
                el={el}
                userId={data[0][1]}
                value={newData[ind + 1][1]}
                edit={edit}
                saveRowDataForInput={saveRowDataForInput}
              />
            ))}
        </form>
      </div>
      <div className={styles.actions}>
        <Btn
          id={data[0][1]}
          btnText="Save"
          btnStyle="edit"
          onClick={saveRowData}
        />
        <Btn id={number} btnText="Delete" btnStyle="inactive" />
      </div>
    </div>
  );
}

export default Editor;
