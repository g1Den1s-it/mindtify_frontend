import {render, screen} from "@testing-library/react";
import {Logo} from "../index";
import React from "react";

describe("Tests for Logo", () => {
    test("Check text in logo", () => {
        render(<Logo/>);
        const logo  = screen.getByTestId("logo");
        expect(logo).toHaveTextContent("Mindtify");
    });

    test("Check Logo Url", () => {
        const url = "/"
        render(<Logo url={url} />);
        const logo = screen.getByTestId("logo");
        expect(logo).toHaveAttribute("href", url);
    });

});