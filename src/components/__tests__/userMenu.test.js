import {render, screen, fireEvent, waitFor} from "@testing-library/react";
import React from "react"
import {Provider, useSelector} from "react-redux";
import {UserMenu} from "../index";
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter } from "react-router-dom";
import {createStore} from "@reduxjs/toolkit";

const mockUserData = {
    user: {
        user: {
            username: "testUser",
            image: "image.png"
        }
    }
};

const testStore = createStore((state = mockUserData, action)=>{
    switch (action){
        default:
            return state;
    }
});


describe("Test User Menu", () => {
    test("Rendering test", () => {
        render(<Provider store={testStore}><BrowserRouter><UserMenu /></BrowserRouter></Provider>);

        const userMenu = screen.getByTestId("user-menu");

        expect(userMenu).toBeInTheDocument();
        expect(userMenu).toBeVisible();
    });
    test("Active handler check", () => {
        global.innerWidth = 767;

        render(<Provider store={testStore}><BrowserRouter><UserMenu /></BrowserRouter></Provider>);

        const burger = screen.getByTestId("burger");
        const nav = screen.getByTestId("nav");
        const body = document.body;

        fireEvent.click(screen.getByTestId("burger"));

        expect(burger).toHaveClass("user-menu-burger", "active");
        expect(nav).toHaveClass("user-nav", "active");
        expect(body).toHaveClass("lock");
    });
});