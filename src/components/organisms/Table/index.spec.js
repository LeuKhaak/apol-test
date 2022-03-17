import React from "react";
import { shallow } from "enzyme";
import Table from "./component";

let component = null;
const data = [
  [
    ["a", "b"],
    ["c", "d"],
    ["e", "f"],
    ["g", "h"],
  ],
];
const setComponent = (props) => shallow(<Table {...props} />);

describe("Table testing:", () => {
  test("is Error shown", () => {
    component = setComponent({
      getError: true,
    });
    expect(component).toMatchSnapshot();
  });

  test("is Loader shown", () => {
    component = setComponent({
      getError: null,
      loader: true,
    });
    expect(component).toMatchSnapshot();
  });

  test("is Table rendered", () => {
    component = setComponent({
      getError: null,
      loader: false,
      data: data,
    });
    expect(component).toMatchSnapshot();
  });
});
