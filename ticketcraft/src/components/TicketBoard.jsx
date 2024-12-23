import React, { useState, useEffect } from 'react';
import Navbar from './Navbar.jsx'
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import PostAddIcon from '@mui/icons-material/PostAdd';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2';
import Tickets from './Tickets.jsx';
import CreateForm from './CreateForm.jsx';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    height: '100vh',
    borderRight: '#c4c4c4 1px solid',
    borderRadius: 0,
}));


function TicketBoard({ formValues, onSubmit }) {
    const [open, setOpen] = useState(false);
    const [openDeleteConfirmation, setOpenDeleteConfirmation] = useState(false);
    const [ticketsArray, setTicketsArray] = useState([]);
    const [valueToRemove, setValueToRemove] = useState('');
    const columns = ['To do 📌', 'In progress 🚧', 'Done ✅'];

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleDeleteClickClose = () => {
        setOpenDeleteConfirmation(false);
    }

    const handleDeleteClick = (ticket) => {
        setOpenDeleteConfirmation(true);
        setValueToRemove(ticket);
    };

    const handleDeleteTicket = () => {
        setTicketsArray(prevItems => prevItems.filter(item => item !== valueToRemove));
        setValueToRemove('');
        setOpenDeleteConfirmation(false);
    };

    const handleTicketChange = (updatedTicket) => {
        setTicketsArray(prevTickets => {
            return prevTickets.map(ticket => {
                // If the ticket's ticketName matches the updatedTicket's ticketName, update it
                if (ticket.ticketName === updatedTicket.ticketName) {
                    // Return the updated ticket by spreading the old ticket and the new updates
                    return {
                        ...ticket, // Existing properties of the ticket
                        ...updatedTicket // Overwrite with updated properties (status, assignee.)
                    };
                }
                // If the ticket doesn't match, return it unchanged
                return ticket;
            });
        });
    };

    useEffect(() => {
        if (formValues.createTicketForm) {
            setTicketsArray(prevTickets => {
                // Only add formValues if it doesn't exists
                if (!prevTickets.some(ticket => ticket.ticketName === formValues.ticketName)) {
                    return [...prevTickets, formValues];
                }
                return prevTickets; // No change if the item already exists
            });
        }
    }, [formValues]);

    useEffect(() => {
        console.log('Updated ticketsArray:', ticketsArray);
    }, [ticketsArray]);

    useEffect(() => {
        // if user submitted form
        if (!formValues.formSkipped && !formValues.createTicketForm) {
            setTicketsArray([{ status: 'To do', ticketName: 'Create wireframe', assignee: '' }, { status: 'To do', ticketName: 'Create prototype', assignee: '' }, { status: 'To do', ticketName: 'Implement code', assignee: '' }, { status: 'To do', ticketName: 'Test/QA', assignee: '' }, { status: 'To do', ticketName: 'Deployment', assignee: '' }]);
        }
    }, [])
    return (
        <>
            <Navbar />
            <Box sx={{ width: '100%', margin: 'auto' }}>
                <Dialog aria-label="Create ticket" onClose={handleClose} open={open}>
                    <CreateForm onSubmit={onSubmit} onClose={handleClose} teamMembersArr={formValues.teamMembers} />
                </Dialog>
                <Dialog onClose={handleDeleteClickClose} open={openDeleteConfirmation}>
                    <Box sx={{ padding: '30px' }}>
                        <p>Are you sure you want to delete this ticket?</p>
                    </Box>
                    <Box sx={{ padding: '10px', width: '100%', margin: 'auto', display: 'flex', justifyContent: 'space-evenly' }}>
                        <Button onClick={handleDeleteTicket} variant="outlined">Yes</Button>
                        <Button onClick={handleDeleteClickClose} variant="contained">No</Button>
                    </Box>
                </Dialog>
                <Button sx={{ position: 'absolute', top: '10px', right: '20px' }} variant="contained" onClick={handleClickOpen}>
                    Create ticket
                    <PostAddIcon />
                </Button>
                <Grid container columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        columns.map((column) => {
                            return (
                                <Grid size={4}>
                                    <Item>
                                        {/* map through statuses and conditionally render ticket component on column based on status? */}
                                        <h2 style={{ textAlign: 'center' }}>{column}</h2>
                                        <Box
                                            sx={{ fontSize: '12px', textTransform: 'uppercase' }}
                                        >
                                            {ticketsArray.length > 0 ?
                                                (
                                                    ticketsArray.map((ticket) => {
                                                        return (
                                                            column.includes(ticket.status) && (
                                                                <Tickets
                                                                    key={ticket.ticketName}  // Always add a key prop when mapping over arrays in React
                                                                    onDeleteClick={handleDeleteClick}
                                                                    formValues={formValues}
                                                                    ticket={ticket}
                                                                    onTicketChange={handleTicketChange}
                                                                />)
                                                        )
                                                    })) : (<p>No tickets yet</p>)
                                            }
                                        </Box>
                                    </Item>
                                </Grid>
                            )
                        })
                    }
                </Grid>
            </Box>
        </>
    );
}

export default TicketBoard;
