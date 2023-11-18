import React from "react";
import { render, screen } from '@testing-library/react';
import Overview from "../components/Overview/Overview";

test("Header text is being rendered" , () => {
    render(<Overview/>);
    const headerText = screen.getByTestId("header");
    expect(headerText).toBeInTheDocument();
})

test("Subtext is being rendered", () => {
    render(<Overview/>);
    const subtext = screen.getByTestId("subtext");
    expect(subtext).toBeInTheDocument();
})

test("All overview cards are being rendered", () =>{
    const expectedCardsText: string[] = [
        "Progress Insights",
        "Daily Tracker",
        "Budget Security",
        "Clear Roadmap"
    ]
    render(<Overview/>);
    expectedCardsText.forEach((text, index) => {
        const overviewCard = screen.getByText(expectedCardsText[index]);
        expect(overviewCard).toBeInTheDocument();
    })
})

