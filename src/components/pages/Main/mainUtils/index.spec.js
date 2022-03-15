import { createEmptyRow } from "./createEmptyRow";
import { prepareDataForFilter } from "./prepareDataForFilter";

describe("createEmptyRow util", () => {
  test("check createEmptyRow", () => {
    const usersList = [
      [
        ["a", "b"],
        ["c", "d"],
        ["e", "f"],
      ],
    ];
    expect(createEmptyRow(usersList)[1][1]).toBe("");
  });
});

describe("prepareDataForFilter util", () => {
  test("check prepareDataForFilter", () => {
    const arr = [
      ["a", "b"],
      ["c", "d"],
      ["e", "f"],
    ];
    expect(prepareDataForFilter(arr)[0].length).toBe(1);
  });
});
