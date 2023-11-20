import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from '../components/Footer/Footer';

test("The footer is being rendered", (): void =>{
    render(<Footer/>);
    const footerElement: HTMLElement = screen.getByTestId("footer");
    expect(footerElement).toBeInTheDocument();
});

test("All links are being rendered", ():void => {
    render(<Footer/>);
    const linkElements: HTMLElement[] = screen.getAllByRole("link");
    expect(linkElements.length).toBe(17);
})

test("Copyright section is being rendered", ():void => {
    render(<Footer/>);
    const copyrightElement: HTMLElement = screen.getByTestId("copyright")
    const copyrightChildren: HTMLCollection = copyrightElement.children
    expect(copyrightElement).toBeInTheDocument();
    expect(copyrightChildren.length).toBe(1);
})