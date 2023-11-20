import React from 'react';
import { render, screen } from '@testing-library/react';
import Desc from '../components/Desc/Desc';

test("Description section is being rendered", (): void =>{
    render(<Desc/>);
    const descSection:HTMLElement = screen.getByTestId("desc-section");
    expect(descSection).toBeInTheDocument();
});

test("All images are being rendered", (): void =>{
    render(<Desc/>);
    const descImages: HTMLElement[] = screen.getAllByRole("img");
    expect(descImages.length).toBe(3);
});

test("All links are being rendered", () =>{
    render(<Desc/>);
    const descLinks: HTMLElement[] = screen.getAllByRole("link");
    expect(descLinks.length).toBe(3);
});