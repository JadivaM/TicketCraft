import React, { useEffect } from 'react';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import DeleteIcon from '@mui/icons-material/Delete';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import CardActions from '@mui/material/CardActions';

function Tickets({ formValues, onDeleteClick, ticket, onTicketChange }) {



    const statuses = [
        {
            value: 'To do',
            label: 'To do',
        },
        {
            value: 'In progress',
            label: 'In progress',
        },
        {
            value: 'Done',
            label: 'Done',
        }
    ];

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        ticket[name] = value;
        onTicketChange(ticket);
    };
    // };

    const handleDeleteButtonClicked = (event) => {
        event.preventDefault();
        onDeleteClick(ticket);
    }

    useEffect(() => {
        console.log('ticket useEffect')
    }, [ticket]);

    return (
        <>
            {ticket ? (
                <>
                    <Paper
                        sx={{ backgroundColor: '#e6f0fe', height: '200px', margin: '10px' }}
                        elevation={3}>
                        <Box sx={{ display: 'flex', width: '100%', justifyContent: 'space-between' }}>
                            <TextField
                                id="outlined-select"
                                select
                                sx={{ backgroundColor: '#e6f0fe' }}
                                onChange={handleInputChange}
                                name="assignee"
                                label="Assignee"
                                value={ticket.assignee}
                            >
                                {formValues.teamMembers.length > 0 ? (
                                    formValues.teamMembers.map((option) => (
                                        <MenuItem key={option} value={option}>
                                            {option}
                                        </MenuItem>
                                    ))
                                ) : (
                                    <MenuItem key={ticket.assignee} value={ticket.assignee}>
                                        {ticket.assignee}
                                    </MenuItem>)}
                            </TextField>
                            <TextField
                                id="status-ticket"
                                size="small"
                                select
                                name="status"
                                value={ticket.status}
                                sx={{ backgroundColor: '#e6f0fe' }}
                                onChange={handleInputChange}
                            >
                                {statuses.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </Box>
                        <h2 style={{ textAlign: 'center' }}>{ticket.ticketName}</h2>
                        <CardActions sx={{ display: 'flex', width: '90%', height: '85px', justifyContent: 'flex-end', marginLeft: 'auto' }}>
                            <DeleteIcon onClick={handleDeleteButtonClicked} style={{ cursor: 'pointer' }} />
                        </CardActions>
                    </Paper>
                </>
            ) :
                (
                    <p>test</p>
                )
            }
        </>
    )
}

export default Tickets;