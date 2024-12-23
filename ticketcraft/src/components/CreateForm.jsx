import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';


function CreateForm({ onSubmit, onClose, teamMembersArr }) {
  const [newMember, setNewMember] = useState('');
  const [localTeamMembers, setLocalTeamMembers] = useState(teamMembersArr);

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

  const handleNewMemberChange = (event) => {
    setNewMember(event.target.value);
  };

  const handleAddNewMember = () => {
    // allow users to select from existing team members array or add
    // set the new member as the assignee
    const checkLocalTeamMembers = localTeamMembers || [];

    if (newMember && !checkLocalTeamMembers.includes(newMember)) {
      setFormValues({
        ...formValues,
        teamMembers: [...checkLocalTeamMembers, newMember],
        assignee: newMember,
      });
      onSubmit({ teamMembers: [...checkLocalTeamMembers, newMember] });
      setNewMember(''); // Clear the new member input field
    }
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (!formValues.ticketName || !formValues.assignee || !formValues.status) {
      alert("Please fill out all fields.");
      return;
    } else {
      onSubmit(formValues);
      onClose();
    }
  };

  // Sync local team members state with the prop when it changes
  useEffect(() => {
    setLocalTeamMembers(teamMembersArr);
  }, [teamMembersArr]);

  return (
    <>
      <Card sx={{ width: 600, height: 600, display: 'flex', flexDirection: 'column', justifyContent: 'center', margin: 'auto', marginTop: '20px' }}>
        <h2 style={{ textAlign: 'center' }}>Create a new ticket</h2>
        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '50%', margin: 'auto' }}>
          <p style={{ fontWeight: '600' }}>1. What should this ticket be named? *</p>
          <TextField
            id="outlined-size-small"
            size="small"
            sx={{ backgroundColor: '#e6f0fe' }}
            onChange={handleInputChange}
            name="ticketName"
            value={formValues.ticketName}
          />
          <p style={{ fontWeight: '600' }}>2. Who should be assigned to this ticket? *</p>
          {/* Render existing team members or add new */}
          {localTeamMembers && localTeamMembers.length > 0 ? (
            <Select
              value={formValues.assignee}
              onChange={handleInputChange}
              label="Assignee"
              displayEmpty
              name="assignee"
            >
              {localTeamMembers.map((member, index) => (
                <MenuItem key={index} value={member}>
                  {member}
                </MenuItem>
              ))}
              <MenuItem value="addNew">+ Add New Member</MenuItem>
            </Select>
          ) : (
            <Select
              value={formValues.assignee}
              onChange={handleInputChange}
              label="Assignee"
              displayEmpty
              name="assignee"
            >
              <MenuItem value="addNew">+ Add New Member</MenuItem>
            </Select>
          )}
          {/* if "Add New Member" is selected */}
          {formValues.assignee === 'addNew' && (
            <>
              <TextField
                id="outlined-size-small"
                size="small"
                label="New Assignee"
                sx={{ backgroundColor: '#e6f0fe', marginTop: '20px', marginBottom: '20px' }}
                onChange={handleNewMemberChange}
                // name="ticketName"
                value={newMember}
              />
              <Button onClick={handleAddNewMember} variant="outlined">
                Add Member
              </Button>
            </>
          )}
          <p style={{ fontWeight: '600' }}>3. What is the status of this ticket? *</p>
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
