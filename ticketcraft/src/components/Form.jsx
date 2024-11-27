import React, { useState, useEffect } from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Navbar from './Navbar.jsx'
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import InputAdornment from '@mui/material/InputAdornment';


function Form({ onSubmit }) {
  const projects = [
    {
      value: 'Front-end',
      label: 'Front-end',
    }
  ];

  const methodologies = [
    {
      value: 'Agile',
      label: 'Agile',
    }
  ];

  const [formValues, setFormValues] = useState({
    projectName: "",
    startDate: "",
    endDate: "",
    typeOfProject: "",
    methodology: "",
    sprintTime: "",
    teamMembers: [],
    formSkipped: "",
    createTicketForm: false
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === 'teamMembers') {
      // Split the input value by commas, trim extra spaces, and filter out empty names
      const nameList = value.split(',').map((name) => name.trim()).filter((name) => name !== '');

      // Update the teamMembers field in formValues
      setFormValues((prevValues) => ({
        ...prevValues,
        [name]: nameList, // Update teamMembers as an array
      }));
    } else {
      setFormValues((prevValues) => ({
        ...prevValues,
        [name]: value,
      }));
    }
  };

  const handleFormSkipped = (event) => {
    // if user chooses to skip the form submission. generate blank ticket board.
    event.preventDefault();
    onSubmit({formSkipped: true});
  }

  const handleFormSubmit = (event) => {
    // handle form submission and generate tickets for user
    event.preventDefault();
    onSubmit(formValues);
  };

  return (
    <>
      <Navbar />
      <Card sx={{ width: 800, height: 800, display: 'flex', flexDirection: 'column', justifyContent: 'center', margin: 'auto', marginTop: '20px' }}>
        <h2 style={{ textAlign: 'center' }}>About your project</h2>
        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '50%', margin: 'auto' }}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <p style={{ fontWeight: '600' }}>1. What is your start date?</p>
            <DatePicker sx={{ backgroundColor: '#e6f0fe' }} label="Start date" />
            <p style={{ fontWeight: '600' }}>2. What is your end date?</p>
            <DatePicker sx={{ backgroundColor: '#e6f0fe' }} label="End date" />
          </LocalizationProvider>
          <p style={{ fontWeight: '600' }}>3. What type of project are you building?</p>
          <TextField
            id="outlined-select"
            select
            sx={{ backgroundColor: '#e6f0fe' }}
            onChange={handleInputChange}
            name="typeOfProject"
            value={formValues.typeOfProject}
          >
            {projects.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <p style={{ fontWeight: '600' }}>4. What methodology are you using?</p>
          <TextField
            id="outlined-select-currency"
            select
            sx={{ backgroundColor: '#e6f0fe' }}
            onChange={handleInputChange}
            name="methodology"
            value={formValues.methodology}
          >
            {methodologies.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <p style={{ fontWeight: '600' }}>5. How long are your sprints?</p>
          <TextField
            id="outlined-size-small"
            size="small"
            type="number"
            sx={{ backgroundColor: '#e6f0fe' }}
            slotProps={{
              input: {
                endAdornment: <InputAdornment position="end">Weeks</InputAdornment>,
              },
            }}
            onChange={handleInputChange}
            name="sprintTime"
            value={formValues.sprintTime}
          />
          <p style={{ fontWeight: '600' }}>6. Enter your team members names separated by commas</p>
          <TextField
            id="outlined-size-small"
            size="small"
            sx={{ backgroundColor: '#e6f0fe' }}
            onChange={handleInputChange}
            name="teamMembers"
            value={formValues.teamMembers}
          />
        </Box>
        <Button onClick={handleFormSubmit} sx={{ margin: 'auto', width: '50%' }} variant="contained">Submit</Button>
        <Button onClick={handleFormSkipped} sx={{ margin: 'auto', width: '50%' }}>Skip this step</Button>
      </Card>
    </>
  );
}

export default Form;
