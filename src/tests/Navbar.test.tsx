import React from 'react';
import { render, screen } from '@testing-library/react';
import Navbar from '../components/Navbar/Navbar';

test("Navbar is present", ()=>{
    render(<Navbar/>);
    const navElement = screen.getByTestId("navbar");
    expect(navElement).toBeInTheDocument();
})

test("Logo is present", () => {
    render(<Navbar/>);
    const titleText = screen.getByTestId("title");
    expect(titleText).toBeInTheDocument();
})

test("Navbar renders correct amount of links", ()=>{
    render(<Navbar/>);
    const allLinks = screen.getAllByRole("link");
    expect(allLinks).toHaveLength(6);
})

test("All navbar links have correct text and href locations", () => {
    const expectedLinkProperties = [
        ["About", "/about"],
        ["Pricing", "/pricing"],
        ["Showcase", "/showcase"],
        ["Book an Appointment", "/book"],
        ["Sign In", "/signin"],
        ["Sign Up", "/register"]
    ];
    render(<Navbar/>);
    const allLinks = screen.getAllByRole("link");
    allLinks.forEach((link, index) => {
        expect(link.textContent).toBe(expectedLinkProperties[index][0]);
        expect(link).toHaveAttribute("href", expectedLinkProperties[index][1]);
    }) 
})
