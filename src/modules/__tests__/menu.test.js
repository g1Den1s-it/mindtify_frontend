import {render, screen} from "@testing-library/react";
import React from "react";
import {Menu} from "../index";
import '@testing-library/jest-dom/extend-expect';
import {UserMenu} from "../../components";
describe("Menu Test", () => {
    test("Rendering test", () =>{
        render(<Menu/>);

        const menu = screen.getByTestId("menu");

        expect(menu).toBeInTheDocument();
        expect(menu).toBeVisible();
    });
    test("Rendering logo test", () => {
       render(<Menu/>);

       const logo = screen.getByTestId("logo");

       expect(logo).toBeInTheDocument();
       expect(logo).toBeVisible();
    });
    test("Rendering user menu", () =>{
        render(<UserMenu/>);

        const userMenu = screen.getByTestId("user-menu");

        expect(userMenu).toBeInTheDocument();
        expect(userMenu).toBeVisible();
    });
});