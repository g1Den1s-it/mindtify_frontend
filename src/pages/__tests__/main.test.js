import {render, screen, waitFor} from "@testing-library/react";
import React from "react";
import '@testing-library/jest-dom/extend-expect';
import {Main} from "../index";

describe("Main Page Test", () =>{
    test("Rendering test", () => {
        render(<Main/>);

        const main = screen.getByTestId("main");

        expect(main).toBeInTheDocument();
        expect(main).toBeVisible();
    });
});