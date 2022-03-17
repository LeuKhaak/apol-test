import React from "react";
import Cell from "../Cell";

const TableTitle = ({ el, sortUsers }) => {
  return (
    <div
      id={el[0]}
      key={el[0]}
      style={{ cursor: "pointer" }}
      onClick={() => sortUsers(el[0])}
    >
      <Cell content={el[1]} cellStyle="cellTitle" cellContentStyle="simbol" />
    </div>
  );
};

export default TableTitle;
