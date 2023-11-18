import React from 'react';
import { render, screen } from '@testing-library/react';
import Landing from '../components/Landing/Landing';

test("Landing image is being rendered", (): void =>{
    render(<Landing/>);
    const landingImg: HTMLElement = screen.getByRole("img");
    expect(landingImg).toBeInTheDocument();
})

test("Landing text is being rendered", (): void =>{
    render(<Landing/>);
    const landingText: HTMLElement = screen.getByTestId("landing-text");
    expect(landingText).toBeInTheDocument();
})

test("Landing subtext is being rendered", (): void =>{
    render(<Landing/>);
    const landingSubtext: HTMLElement = screen.getByTestId("landing-subtext");
    expect(landingSubtext).toBeInTheDocument();
})

test("Call to action links are being rendered", (): void =>{
    render(<Landing/>);
    const ctaLinks: HTMLElement[] = screen.getAllByRole("link");
    ctaLinks.forEach((link) =>{
        expect(link).toBeInTheDocument;
    })
})

test("Call to action links have the right text and href", () =>{
    const expectedLinksValues: Array<[string,string]> = [
        ["Free Sign Up", "/register"],
        ["Book a Demo", "/book"]
    ]
    render(<Landing/>);
    const ctaLinks:HTMLElement[] = screen.getAllByRole("link");
    ctaLinks.forEach((link, index) =>{
        expect(link.textContent).toBe(expectedLinksValues[index][0]);
        expect(link).toHaveAttribute("href", expectedLinksValues[index][1]);
    })
})