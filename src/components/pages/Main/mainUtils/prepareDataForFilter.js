export const prepareDataForFilter = (arr) => {
  const tempObject = Object.fromEntries(arr);
  const newArr = Object.values(tempObject);
  return newArr;
};
