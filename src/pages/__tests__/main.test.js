import {render, screen, waitFor} from "@testing-library/react";
import React from "react";
import '@testing-library/jest-dom/extend-expect';
import {Main} from "../index";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import store from "../../states/store";

describe("Main Page Test", () =>{
    test("Rendering test", () => {
        render(<Provider store={store}><BrowserRouter><Main/></BrowserRouter></Provider>);

        const main = screen.getByTestId("main");

        expect(main).toBeInTheDocument();
        expect(main).toBeVisible();
    });
});