import {render, screen, fireEvent, waitFor} from "@testing-library/react";
import React from "react"
import {UserMenu} from "../index";


describe("Test User Menu", () => {
   test("Rendering test", () => {
        render(<UserMenu />);

        const userMenu = screen.getByTestId("user-menu");

        expect(userMenu).toBeInTheDocument();
        expect(userMenu).toBeVisible();
   });
   test("Active handler check", () => {
       global.innerWidth = 767;

       render(<UserMenu />);

       const burger = screen.getByTestId("burger");
       const nav = screen.getByTestId("nav");
       const body = document.body;

       fireEvent.click(screen.getByTestId("burger"));

       expect(burger).toHaveClass("user-menu-burger", "active");
       expect(nav).toHaveClass("user-nav", "active");
       expect(body).toHaveClass("lock");
   });

   test("Open handler check", () => {
       render(<UserMenu />);

       const nav = screen.getByTestId("nav");
       const pointer = screen.getByTestId("pointer");

       fireEvent.click(screen.getByTestId("wrapper"));

       expect(nav).toHaveClass("open");
       expect(pointer).toHaveClass("open");
   });
});