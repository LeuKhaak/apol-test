import React from "react";
import { shallow } from "enzyme";
import Input from ".";

let component = null;
const onChange = jest.fn();
const onKeyPress = jest.fn();

const setComponent = (props) => shallow(<Input {...props} />);

describe("Input testing:", () => {
  test("is Input rendered", () => {
    component = setComponent({
      value: "",
      el: ["email", ""],
    });
    expect(component).toMatchSnapshot();
  });

  test("check onKeyPressFunc", () => {
    // TypeError: saveRowDataForInput is not a function
    component = setComponent({
      ind: 0,
      el: ["email", ""],
      saveRowDataForInput: onKeyPress,
    });
    component.find("input").simulate("keypress", { key: "Enter", value: "Sk" });
    expect(onKeyPress).toHaveBeenCalled();
  });

  test("check onChangeFunc", () => {
    //TypeError: edit is not a function
    component = setComponent({
      ind: 0,
      userId: "gds12l",
      el: ["email", ""],
      edit: onChange,
    });
    component.find("input").simulate("change", { target: { value: "s" } });
    expect(onChange).toHaveBeenCalled();
  });
});
