import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import TicketBoard from '../components/TicketBoard';

describe('Ticketboard Component', () => {
    it('renders the ticketboard and columns', () => {
        const mockFormValues = {
            projectName: "Test",
            typeOfProject: "Front-end",
            teamMembers: ["Michael", "Martin"],
            skippedForm: false,
            createTicketForm: true
        }

        render(<TicketBoard formValues={mockFormValues} onSubmit={jest.fn()} />);

        const createButton = screen.getByRole('button', { name: /create ticket/i });
        expect(createButton).toBeInTheDocument();

        expect(screen.getByText('To do 📌')).toBeInTheDocument();
        expect(screen.getByText('In progress 🚧')).toBeInTheDocument();
        expect(screen.getByText('Done ✅')).toBeInTheDocument();
    })
    it('renders the ticketboard with default tickets from the form', () => {
        const mockFormValues = {
            projectName: "Test",
            typeOfProject: "Front-end",
            teamMembers: ["Michael", "Martin"],
            skippedForm: false,
            createTicketForm: true
        }

        render(<TicketBoard formValues={mockFormValues} onSubmit={jest.fn()} />);
        waitFor(() => {
            expect(screen.getByText('Create wireframe')).toBeInTheDocument();
            expect(screen.getByText('Create prototype')).toBeInTheDocument();
        })
    })
    it('opens the dialog to create a ticket', () => {
        const mockFormValues = {
            projectName: "Test",
            typeOfProject: "Front-end",
            teamMembers: ["Michael", "Martin"],
            skippedForm: false,
            createTicketForm: true
        }

        render(<TicketBoard formValues={mockFormValues} onSubmit={jest.fn()} />);

        // click the Create ticket button
        const createButton = screen.getByRole('button', { name: /create ticket/i });

        fireEvent.click(createButton);

        // if the dialog is open
        waitFor(() => {
            const createTicketDialog = screen.getByRole('dialog', { name: /Create a new ticket/i });
            expect(createTicketDialog).toBeInTheDocument();
        })
    });
})