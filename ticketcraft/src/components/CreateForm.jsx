import React, { useState, useEffect } from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import InputAdornment from '@mui/material/InputAdornment';


function CreateForm({ onSubmit, onClose }) {

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

  const [formValues, setFormValues] = useState({
    ticketName: "",
    teamMembers: [],
    assignee: "",
    status: "",
    createTicketForm: true
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleFormSubmit = (event) => {
    console.log('event', event);
    event.preventDefault();
    onSubmit(formValues);
    onClose();
  };

  return (
    <>
      <Card sx={{ width: 600, height: 500, display: 'flex', flexDirection: 'column', justifyContent: 'center', margin: 'auto', marginTop: '20px' }}>
        <h2 style={{ textAlign: 'center' }}>Create a new ticket</h2>
        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '50%', margin: 'auto' }}>
          <p style={{ fontWeight: '600' }}>1. What should this ticket be named?</p>
          <TextField
            id="outlined-size-small"
            size="small"
            sx={{ backgroundColor: '#e6f0fe' }}
            onChange={handleInputChange}
            name="ticketName"
            value={formValues.ticketName}
          />
          <p style={{ fontWeight: '600' }}>2. Who should be assigned to this ticket?</p>
          <TextField
            id="outlined-size-small"
            size="small"
            sx={{ backgroundColor: '#e6f0fe' }}
            onChange={handleInputChange}
            name="assignee"
            value={formValues.assignee}
          />
          <p style={{ fontWeight: '600' }}>3. What is the status of this ticket?</p>
          <TextField
            id="status-ticket"
            size="small"
            select
            name="status"
            onChange={handleInputChange}
            value={formValues.status}
            sx={{ backgroundColor: '#e6f0fe' }}
          >
            {statuses.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Box>
        <Button onClick={handleFormSubmit} sx={{ margin: 'auto', width: '50%' }} variant="contained">Submit</Button>
      </Card>
    </>
  );
}

export default CreateForm;
