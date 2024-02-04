import {render, screen} from "@testing-library/react";
import React from "react"
import {Card} from "../index";
import '@testing-library/jest-dom/extend-expect';
describe("Test Card", () => {
    test("Rendering test", () => {
        const testData = {
            img: "/default/cardDefaultImage.png",
            slug: "8743f5b2-5db7-8d05-d17e76420b84",
            name: "Tests name"
        };
        render(<Card img={testData.img} slug={testData.slug } name={testData.name}/>);

        const card = screen.getByTestId(`card-${testData.slug}`);

        expect(card).toBeInTheDocument();
    });

    test("Props test", () => {
        expect(() =>{
            render(<Card img={testData.img} slug={testData.slug } name={testData.name}/>)
        }).toThrow();
    });


});