import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import Form from '../components/Form';

describe('MyForm Component', () => {
    it('renders the form with initial values', () => {
        render(<Form onSubmit={jest.fn()} />);

        // Check if the form elements render correctly
        expect(screen.getByLabelText("Start date")).toBeInTheDocument();
        expect(screen.getByLabelText("End date")).toBeInTheDocument();
        // Check if the select field is rendered
        const selectElement = screen.getByTestId('select-dropdown');  // A select element should be rendered as a combobox
        expect(selectElement).toBeInTheDocument();
    });
    it('renders alert if user did not fill out required fields when submitting form', () => {
        // Mock window.alert to track calls
        jest.spyOn(window, 'alert').mockImplementation(() => {});

        render(<Form onSubmit={jest.fn()} />);

        // Simulate form submission without filling the fields
        fireEvent.click(screen.getByText('Submit'));

        // Check if the alert was called with the correct message
        expect(window.alert).toHaveBeenCalledWith('Please fill out all required fields.');
    })
});
