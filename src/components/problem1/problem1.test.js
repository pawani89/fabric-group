import { render, screen, fireEvent } from "@testing-library/react";
import Problem1 from "./problem1";
import React from "react";

describe("Problem 1 component test", () => {
  it("component renders", () => {
    let name = "";
    const setName = jest.spyOn(React, "useState");
    let relation = "";
    const setRelation = jest.spyOn(React, "useState");
    let result = "";
    const findFamily = jest.fn();
    render(
      <Problem1
        name={name}
        setName={setName}
        relation={relation}
        setRelation={setRelation}
        findFamily={findFamily}
        result={result}
      />
    );
    const problem1title = screen.getByText("Problem 1");
    expect(problem1title).toBeInTheDocument();
  });
  it("input change calls setName function passed as prop:", () => {
    let name = "";
    const setName = jest.spyOn(React, "useState");
    let relation = "";
    const setRelation = jest.spyOn(React, "useState");
    let result = "";
    const findFamily = jest.fn();
    render(
      <Problem1
        name={name}
        setName={setName}
        relation={relation}
        setRelation={setRelation}
        findFamily={findFamily}
        result={result}
      />
    );
    let nameInputField = screen.getByRole("textbox");
    fireEvent.change(nameInputField, {
      target: { value: "Akansha" },
    });
    expect(setName).toHaveBeenCalledTimes(1);
  });
  it("select change calls setRealtion function passed as prop:", () => {
    let name = "";
    const setName = jest.spyOn(React, "useState");
    let relation = "";
    const setRelation = jest.spyOn(React, "useState");
    let result = "";
    const findFamily = jest.fn();
    render(
      <Problem1
        name={name}
        setName={setName}
        relation={relation}
        setRelation={setRelation}
        findFamily={findFamily}
        result={result}
      />
    );
    let selectInputField = screen.getByTestId("relations");
    fireEvent.change(selectInputField, {
      target: { value: "select" },
    });
    expect(setRelation).toHaveBeenCalledTimes(1);
  });
  it("button click calls findfamily function passed as prop:", () => {
    let name = "";
    const setName = jest.spyOn(React, "useState");
    let relation = "";
    const setRelation = jest.spyOn(React, "useState");
    let result = "";
    const findFamily = jest.fn();
    render(
      <Problem1
        name={name}
        setName={setName}
        relation={relation}
        setRelation={setRelation}
        findFamily={findFamily}
        result={result}
      />
    );
    let button = screen.getByTestId("findfamily");
    fireEvent.click(button);
    expect(findFamily).toHaveBeenCalledTimes(1);
  });
});
