import React from "react";
import { shallow } from "enzyme";
import Btn from ".";

let component = null;
const onClick = jest.fn();
const setComponent = (props) => shallow(<Btn {...props} />);
beforeEach(() => {
  component = setComponent();
});

describe("Btn testing:", () => {
  test("is Btn contain text", () => {
    component = setComponent({
      btnText: "testText",
      btnStyle: "testStyle",
    });
    expect(component).toMatchSnapshot();
  });

  test("is Btn contain nothing", () => {
    expect(component).toMatchSnapshot();
  });

  test("is Btn not displayed", () => {
    component = setComponent({
      btnText: "testText",
      disp: "none",
    });
    expect(component).toMatchSnapshot();
  });

  test("check onClickFunc", () => {
    component = setComponent({
      onClick: onClick,
      btnText: "testText",
    });
    component.find("button").simulate("click");
    expect(onClick).toHaveBeenCalled();
  });
  test("check onClickFunc no called", () => {
    component = setComponent({
      btnText: "testText",
    });
    component.find("button").simulate("click");
    expect(onClick).toHaveBeenCalledTimes(0);
  });

  test("is Btn has className", () => {
    component = setComponent({
      btnText: "testText",
      btnStyle: "buttonNext",
    });
    expect(component.find("buttonNext")).toBeTruthy();
  });
});
