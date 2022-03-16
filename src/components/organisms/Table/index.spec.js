import React from "react";
import { shallow } from "enzyme";
import Table from "./component";

let component = null;
const setComponent = (props) => shallow(<Table {...props} />);
beforeEach(() => {
  component = setComponent();
});

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

  //test("is CardList rendered", () => {
  //  component = setComponent({
  //    getError: null,
  //    loader: false,
  //    data: [
  //      {
  //        char_id: 1,
  //        name: "Bill",
  //      },
  //      {
  //        char_id: 2,
  //        name: "Cat",
  //      },
  //    ],
  //  });
  //  expect(component).toMatchSnapshot();
  //});
});
