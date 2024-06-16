import {render, screen} from "@testing-library/react";
import React from "react";
import {Menu} from "../index";
import '@testing-library/jest-dom/extend-expect';
import {UserMenu} from "../../components";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import store from "../../states/store";

describe("Menu Test", () => {
    test("Rendering test", () =>{
        render(<Provider store={store}><BrowserRouter><Menu/></BrowserRouter></Provider>);

        const menu = screen.getByTestId("menu");

        expect(menu).toBeInTheDocument();
        expect(menu).toBeVisible();
    });
    test("Rendering logo test", () => {
       render(<Provider store={store}><BrowserRouter><Menu/></BrowserRouter></Provider>);

       const logo = screen.getByTestId("logo");

       expect(logo).toBeInTheDocument();
       expect(logo).toBeVisible();
    });
    test("Rendering user menu", () =>{
        render(<Provider store={store}><BrowserRouter><UserMenu/></BrowserRouter></Provider>);

        const userMenu = screen.getByTestId("user-menu");

        expect(userMenu).toBeInTheDocument();
        expect(userMenu).toBeVisible();
    });
});