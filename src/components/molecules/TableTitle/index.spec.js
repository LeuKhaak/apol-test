import React from "react";
import { shallow } from "enzyme";
import TableTitle from ".";

let component = null;
const onClick = jest.fn();
const setComponent = (props) => shallow(<TableTitle {...props} />);

describe("TableTitle testing:", () => {
  test("is TableTitlerendered", () => {
    component = setComponent({
      el: ["email", "gfdr"],
    });
    expect(component).toMatchSnapshot();
  });

  test("check onClickFunc", () => {
    component = setComponent({
      el: ["email", "gfdr"],
      sortUsers: onClick,
    });
    component.find("div").simulate("click");
    expect(onClick).toHaveBeenCalled();
  });
});
