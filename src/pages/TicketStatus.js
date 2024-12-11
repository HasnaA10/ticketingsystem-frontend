import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TicketStatus = () => {
  const [ticketStatuses, setTicketStatuses] = useState([]);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    axios.get('http://localhost:8080/tickets/status') 
      .then(response => {
        console.log(response.data);
        setTicketStatuses(response.data);
        setLoading(false); 
      })
      .catch(error => {
        console.error('There was an error fetching the ticket status!', error);
        setLoading(false); 
      });
  }, []);

  return (
    <div className="container mt-4">
      <h1>Ticket Status</h1>

      {/* Show loading message while fetching data */}
      {loading ? (
        <p>Loading...</p>
      ) : (
        
        ticketStatuses.length === 0 ? (
          <p>No ticket data available</p>
        ) : (
          
          <table className="table table-striped table-bordered">
            <thead className="thead-dark">
              <tr>
                <th>Event Name</th>
                <th>Available Tickets</th>
                <th>Sold Tickets</th>
              </tr>
            </thead>
            <tbody>
              {ticketStatuses.map((ticket, index) => (
                <tr key={index}>
                  <td>{ticket.eventName}</td>
                  <td>{ticket.availableTickets}</td>
                  <td>{ticket.soldTickets}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )
      )}
    </div>
  );
};

export default TicketStatus;
