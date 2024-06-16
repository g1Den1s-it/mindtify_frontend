import {render, screen, waitFor} from "@testing-library/react";
import React from "react";
import '@testing-library/jest-dom/extend-expect';
import {TestList} from "../index";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import store from "../../states/store";

const mock = new MockAdapter(axios);

describe("Test List Test",  () => {
    test("Fetch data and Rendering card", async ()=>{
        let response = {
            data: [
                {
                    id: 1,
                    title: "Brain test",
                    slug: "7QSfqi4zH89tF1SYdaEgyicG",
                    owner: "admin",
                    description: "for you"
                }
            ]
        };

        mock.onGet("/").replyOnce(200, response);

        render(<Provider store={store}><BrowserRouter><TestList/></BrowserRouter></Provider>);

        await waitFor(() => {
            const card = screen.getByTestId(`card-${response.data[0].slug}`);
            const name = screen.getByText(response.data[0].title);

            expect(card).toBeInTheDocument();
            expect(card).toBeVisible();

            expect(name).toHaveTextContent(response.data[0].title);
        })
    });
});