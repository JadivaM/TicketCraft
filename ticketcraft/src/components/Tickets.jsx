import React, { useState, useEffect } from 'react';
import { useDraggable } from '@dnd-kit/core';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import DeleteIcon from '@mui/icons-material/Delete';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import AccountCircle from '@mui/icons-material/AccountCircle';
import InputAdornment from '@mui/material/InputAdornment';

function Tickets({ formValues, onDeleteClick, ticket, onTicketChange }) {
    console.log('ticket', ticket);
    // const { attributes, listeners, setNodeRef, transform } = useDraggable({
    //     id: 'draggable',
    // });

    // const style = transform ? {
    //     transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
    // } : undefined;


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
        console.log('handleInputChange');
        const { name, value } = event.target;
        console.log('name', name);
        console.log('value', value);
        ticket[name] = value;
        onTicketChange(ticket);
    };
    // };

    const handleDeleteButtonClicked = (event) => {
        event.preventDefault();
        console.log('handleDeleteButtonClicked');
        onDeleteClick(ticket);
    }

    useEffect(() => {
        // setTicketsArray(prevTickets => [...prevTickets, formValues]);
        console.log('ticket useEffect')
    }, [ticket]);

    return (
        <>
            {ticket ? (
                <>
                    <Paper
                        // ref={setNodeRef}
                        // style={style}
                        // {...listeners}
                        // {...attributes}
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