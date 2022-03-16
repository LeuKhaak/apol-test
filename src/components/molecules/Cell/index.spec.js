import React from "react";
import { shallow } from "enzyme";
import Cell from ".";

let component = null;
const setComponent = (props) => shallow(<Cell {...props} />);
beforeEach(() => {
  component = setComponent();
});

describe("Cell testing:", () => {
  test("is Cell has style height", () => {
    component = setComponent({
      cellStyle: "cellTitleActions",
    });
    expect(component).toMatchSnapshot();
  });
});
