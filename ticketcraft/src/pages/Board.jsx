import React, {useState } from 'react';
import Form from '../components/Form';
import TicketBoard from '../components/TicketBoard';


function Board() {
    // const [isLoading, setIsLoading] = useState(false);
    const [hasBoard, setHasBoard] = useState(false);

    const [formValues, setFormValues] = useState({
        projectName: "",
        ticketName: "",
        startDate: "",
        endDate: "",
        typeOfProject: "",
        methodology: "",
        sprintTime: "",
        teamMembers: [],
        assignee: "",
        status: "",
        skippedForm: "",
        createTicketForm: ""
      });

    const handleSubmit = (values) => {
        setFormValues(values);
        setHasBoard(true);
    }

    return (
        <>
        {hasBoard ? (<TicketBoard formValues={formValues} onSubmit={handleSubmit} />) : (<Form onSubmit={handleSubmit} />)}
        </>
    )
}

export default Board;
