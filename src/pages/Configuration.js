import axios from "axios";
import React, { useState } from "react";

export default function Configuration() {
  const [formData, setFormData] = useState({
    maximumTicketCapacity: "",
    totalTickets: "",
    ticketReleaseRate: "",
    customerRetrievalRate: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8080/tickets/add", formData);
      alert("Configuration submitted successfully!");
    } catch (error) {
      alert("Failed to submit configuration.");
    }
  };

  return (
    <div className="container mt-5">
      <h2>Ticketing System Configuration</h2>
      <form onSubmit={handleSubmit}>
        {[
          { label: "Maximum Ticket Capacity", name: "maximumTicketCapacity" },
          { label: "Total Tickets", name: "totalTickets" },
          { label: "Ticket Release Rate", name: "ticketReleaseRate" },
          { label: "Customer Retrieval Rate", name: "customerRetrievalRate" },
        ].map((field) => (
          <div className="mb-3" key={field.name}>
            <label className="form-label">{field.label}</label>
            <input
              type="number"
              className="form-control"
              name={field.name}
              value={formData[field.name]}
              onChange={handleChange}
              required
            />
          </div>
        ))}
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
