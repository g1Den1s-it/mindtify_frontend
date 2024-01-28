import { render, screen } from "@testing-library/react";
import Logo from "../../ui";

test("Logo name test", () => {
    render(<Logo/>);

    const logoElem = screen.getByText(/Mindtify/i);
    expect(logoElem).toBeInTheDocument();
});
