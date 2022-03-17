import React from "react";
import { shallow } from "enzyme";
import Editor from ".";

let component = null;
const data = [
  ["a", "b"],
  ["c", "d"],
  ["e", "f"],
  ["g", "h"],
];
const setComponent = (props) => shallow(<Editor {...props} />);

describe("Editor testing:", () => {
  test("is Editor rendered", () => {
    component = setComponent({
      mode: "edite",
      data: data,
    });
    expect(component).toMatchSnapshot();
  });
});
