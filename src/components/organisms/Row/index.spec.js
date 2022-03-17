import React from "react";
import { shallow } from "enzyme";
import Row from ".";

let component = null;
const data = [
  ["a", "b"],
  ["c", "d"],
  ["e", "f"],
  ["g", "h"],
];
const setComponent = (props) => shallow(<Row {...props} />);

describe("Editor testing:", () => {
  test("is Editor rendered", () => {
    component = setComponent({
      data: data,
    });
    expect(component).toMatchSnapshot();
  });
});
