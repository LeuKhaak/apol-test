import { transformData } from "./transformData";

describe("transformData util", () => {
  test("check transformData", () => {
    const value = [{ a: "a", b: "b", c: "c dd" }];
    expect(transformData(value)[0].length).toBe(4);
  });
});
