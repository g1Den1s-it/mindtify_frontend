import {render, screen} from "@testing-library/react";
import {Logo} from "../index";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import '@testing-library/jest-dom/extend-expect';
describe("Tests for Logo", () => {
    test("Check text in logo", () => {
        render(<BrowserRouter><Logo/></BrowserRouter>);
        const logo  = screen.getByTestId("logo");
        expect(logo).toHaveTextContent("Mindtify");
    });

    test("Check Logo Url", () => {
        const url = "/"
        render(<BrowserRouter><Logo url={url} /></BrowserRouter>);
        const logo = screen.getByTestId("logo");
        expect(logo).toHaveAttribute("href", url);
    });

});