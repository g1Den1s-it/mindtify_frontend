import React from "react";
import {fireEvent, render, screen} from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import {Input} from "../index";

describe("Tests input", () =>{
   test("rendering test", () => {
       render(<Input/>);

       const input = screen.getByTestId("input");

       expect(input).toBeInTheDocument();
   });
   test("props test", () => {
       render(<Input
           onChange={() => {}}
           onBlur={() => {}}
           type="text"
           name="test"
           value=""
           className="input"
       />);

       const input = screen.getByTestId("input");

       expect(input).toBeInTheDocument();
       expect(input).toHaveAttribute("type", "text");
       expect(input).toHaveAttribute("name", "test");
       expect(input).toHaveValue("");
       expect(input).toHaveClass("input");
   });
   test("test on change", () => {
       render(<Input/>);

       const input = screen.getByTestId("input");

       fireEvent.change(input, {target: {value : "new value"} });

       expect(input).toHaveValue("new value");
   });
   test("test on blur", () => {
       const onBlurMock = jest.fn();

       render(<Input onBlur={onBlurMock}/>);

       const input = screen.getByTestId("input");

        fireEvent.blur(input);

        expect(onBlurMock).toHaveBeenCalled();
   });
});