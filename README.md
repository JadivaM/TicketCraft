### What is it?

TicketCraft is a project management system that allows users to plan their product development sprints and assign tickets to their team. 

## Developer instructions

To contribute and develop on TicketCraft:

You can clone the repository using git clone in your terminal to access it locally.

Open the project in your code editor and cd into the ticketcraft directory.

Run `npm install` to install the dependencies listed in package.json necessary for the project.

Run `npm start` and access localhost:8080 to see the project running locally.

Access `http://localhost:3000/` to access the app.

## User Instructions

You can access TicketCraft by going to (insert link). Once on the site, you can click on the Get started button to begin planning. 

Form

You will be redirected to a form that you can fill out with available options. Based on your inputs to the form, TicketCraft will generate tickets to help expedite the brainstorming and ticket generation process.  If your project requirements are listed in the form, you can fill it out then click on the Submit button. If you prefer to create your own tickets, you can click on the Skip this form button.

Ticket board

Once the form has been submitted or skipped, you will be redirected to the ticket board which displays three different columns: To do, In progress, and Done. These columns will display any tickets based on their status. 

Create and delete tickets

You can create new tickets by clicking on the upper right hand side Create+ button. This will open a form that asks for a name, status, and assignee for the new ticket. When that information is filled out, you can click on the submit button and will see the ticket generated on the board and in the corresponding column based on the status.

If you would like to delete tickets, you can click on the trash icon button that is displayed in each ticket. Once you click on this icon, a popup will display asking to confirm that you would like to delete this ticket. If you click on yes, then the ticket will be removed from the board. If you click on no, then the ticket will remain on the board.

Change assignee

To change the assignee of the ticket, you can click on the left hand side dropdown in each ticket. (how to handle when user doesn’t provide list of assignees)

Change status

To change the status of the ticket, you can click on the right hand side dropdown in each ticket. It will display the three available options for a status that you can click on. When you click on the new status, the ticket will be moved to the corresponding column. You can also drag tickets from their current column to the new column.
