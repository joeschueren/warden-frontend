import React from 'react';
import { render, screen } from '@testing-library/react';
import Navbar from '../components/Navbar/Navbar';

test("Navbar is present", (): void=>{
    render(<Navbar user="test" image={new Blob}/>);
    const navElement: HTMLElement = screen.getByTestId("navbar");
    expect(navElement).toBeInTheDocument();
})

test("Logo is present", (): void => {
    render(<Navbar user="test" image={new Blob}/>);
    const titleText: HTMLElement = screen.getByTestId("title");
    expect(titleText).toBeInTheDocument();
})

test("Navbar renders correct amount of links", (): void=>{
    render(<Navbar user="test" image={new Blob}/>);
    const allLinks: HTMLElement[] = screen.getAllByRole("link");
    expect(allLinks).toHaveLength(6);
})

test("All navbar links have correct text and href locations", (): void => {
    const expectedLinkProperties: Array<[string, string]>= [
        ["About", "/about"],
        ["Pricing", "/pricing"],
        ["Showcase", "/showcase"],
        ["Book an Appointment", "/book"],
        ["Sign In", "/signin"],
        ["Sign Up", "/register"]
    ];
    render(<Navbar user="test"image={new Blob}/>);
    const allLinks = screen.getAllByRole("link");
    allLinks.forEach((link, index) => {
        expect(link.textContent).toBe(expectedLinkProperties[index][0]);
        expect(link).toHaveAttribute("href", expectedLinkProperties[index][1]);
    }) 
})
