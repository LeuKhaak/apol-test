import React from "react";
import { shallow } from "enzyme";
import CellContent from ".";

let component = null;
const setComponent = (props) => shallow(<CellContent {...props} />);
beforeEach(() => {
  component = setComponent();
});

describe("CellContent testing:", () => {
  test("is CellContent contain text", () => {
    component = setComponent({
      content: "testText",
    });
    expect(component).toMatchSnapshot();
  });
  test("is CellContent has sortIcon", () => {
    component = setComponent({
      content: "testText",
      cellContentStyle: "simbol",
    });
    expect(component).toMatchSnapshot();
  });
});
