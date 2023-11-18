import React from 'react';
import { render, screen } from '@testing-library/react';
import Landing from '../components/Landing/Landing';

test("Landing image is being rendered", () =>{
    render(<Landing/>);
    const landingImg = screen.getByRole("img");
    expect(landingImg).toBeInTheDocument();
})

test("Landing text is being rendered", () =>{
    render(<Landing/>);
    const landingText = screen.getByTestId("landing-text");
    expect(landingText).toBeInTheDocument();
})

test("Landing subtext is being rendered", () =>{
    render(<Landing/>);
    const landingSubtext = screen.getByTestId("landing-subtext");
    expect(landingSubtext).toBeInTheDocument();
})

test("Call to action links are being rendered", () =>{
    render(<Landing/>);
    const ctaLinks = screen.getAllByRole("link");
    ctaLinks.forEach((link) =>{
        expect(link).toBeInTheDocument;
    })
})

test("Call to action links have the right text and href", () =>{
    const expectedLinksValues = [
        ["Free Sign Up", "/register"],
        ["Book a Demo", "/book"]
    ]
    render(<Landing/>);
    const ctaLinks = screen.getAllByRole("link");
    ctaLinks.forEach((link, index) =>{
        expect(link.textContent).toBe(expectedLinksValues[index][0]);
        expect(link).toHaveAttribute("href", expectedLinksValues[index][1]);
    })
})