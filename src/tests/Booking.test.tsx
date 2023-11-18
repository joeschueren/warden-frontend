import React from 'react';
import { render, screen } from '@testing-library/react';
import Booking from '../components/Booking/Booking';

test("Booking container is being rendered", ():void => {
    render(<Booking/>);
    const bookingContainer: HTMLElement = screen.getByTestId("booking-div");
    expect(bookingContainer).toBeInTheDocument();
})

test("Form renders 2 inputs", ():void => {
    render(<Booking/>);
    const allInputs: HTMLElement[] = screen.getAllByRole("textbox");
    expect(allInputs.length).toBe(2);
})

test("Form renders an input with placeholder 'name'", ():void =>{
    render(<Booking/>);
    const inputElement: HTMLElement = screen.getByPlaceholderText("Name");
    expect(inputElement).toBeInTheDocument();
})

test("Form renders an input with placeholder 'mm/dd/yyyy'", ():void =>{
    render(<Booking/>);
    const inputElement: HTMLElement = screen.getByPlaceholderText("mm/dd/yyyy");
    expect(inputElement).toBeInTheDocument();
})

test("Call to action renders a sign in and sign up button", ():void =>{
    render(<Booking/>);
    const  ctaButtons: HTMLElement[] = screen.getAllByRole("link");
    expect(ctaButtons.length).toBe(2);
})