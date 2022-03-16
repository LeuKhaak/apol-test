import React from "react";
import { shallow } from "enzyme";
import Editor from ".";

let component = null;
const onChange = jest.fn();
const data = [
  ["a", "b"],
  ["c", "d"],
  ["e", "f"],
  ["g", "h"],
];
const setComponent = (props) => shallow(<Editor {...props} />);
beforeEach(() => {
  component = setComponent();
});

describe("Editor testing:", () => {
  test("is Editor rendered", () => {
    component = setComponent({
      mode: "edite",
      data: data,
    });
    expect(component).toMatchSnapshot();
  });

  //test("check onChangeFunc", () => {
  //  component = setComponent({
  //    onChange: onChange,
  //    mode: "edite",
  //    data: data,
  //  });
  //  component.find("input").simulate(("change", { target: { value: "S" } }));
  //  expect(onChange).toHaveBeenCalled();
  //});
});
