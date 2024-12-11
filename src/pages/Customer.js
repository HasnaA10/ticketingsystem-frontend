import axios from "axios";
import React, { useState } from "react";

export default function Customer() {
  const [formData, setFormData] = useState({
    customerName: "",
    eventName: "",
    ticketsToPurchase: 0,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8080/tickets/customer", formData);
      await axios.post("http://localhost:8080/tickets/purchase", null, {
        params: {
          eventName: formData.eventName,
          ticketsToPurchase: formData.ticketsToPurchase,
          customerName: formData.customerName, 
        },
      });

      alert("Customer added and tickets purchased successfully!");
      setFormData({
        customerName: "",
        eventName: "",
        ticketsToPurchase: 0,
      });
    } catch (error) {
      alert("Failed to add customer and purchase tickets: " + error.message);
    }
  };

  return (
    <div className="container mt-5">
      <h2>Buy Tickets</h2>
      <form onSubmit={handleSubmit}>
        {[
          { label: "Customer Name", name: "customerName", type: "text" },
          { label: "Event Name", name: "eventName", type: "text" },
          { label: "Tickets to Purchase", name: "ticketsToPurchase", type: "number" },
        ].map((field) => (
          <div className="mb-3" key={field.name}>
            <label className="form-label">{field.label}</label>
            <input
              type={field.type}
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
