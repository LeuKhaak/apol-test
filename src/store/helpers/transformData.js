export const transformData = (value) => {
  const newValue = [];
  value.forEach((el) => {
    const dataList = Object.entries(el);
    const firstName = dataList[2][1] ? dataList[2][1].split(" ")[0] : "";
    const lastNameFirstLetter = dataList[2][1].split(" ")[1][0];
    dataList.splice(
      2,
      1,
      ["firstName", firstName],
      ["lastName", lastNameFirstLetter]
    );
    newValue.push(dataList);
  });
  return newValue;
};
