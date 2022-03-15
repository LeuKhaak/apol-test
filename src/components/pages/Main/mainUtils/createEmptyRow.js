import { v4 as uuidv4 } from "uuid";
export const createEmptyRow = (usersList) => {
  const emptyRow = JSON.parse(JSON.stringify(usersList[0]));
  emptyRow.forEach((item) => item.splice(1, 1, ""));
  emptyRow[0].splice(1, 1, uuidv4());
  return emptyRow;
};
