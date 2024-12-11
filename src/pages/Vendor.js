import axios from "axios";
import React, { useState } from "react";

export default function Vendor() {
  const [formData, setFormData] = useState({
    vendorName: "",
    eventName: "",
    ticketsToRelease: 0,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8080/tickets/vendor", formData);
      alert("Vendors added successfully!");
    } catch (error) {
      alert("Failed to add vendors.");
    }
  };

  // const handleAddTickets = async (e) => {
  //   e.preventDefault();
  //   try {
  //     // Sending request to add tickets to the event
  //     await axios.post("http://localhost:8080/tickets/addtickets", null, {
  //       params: {
  //         eventName: formData.eventName,
  //         ticketsToAdd: formData.ticketsToAdd,
  //       },
  //     });
  //     alert("Tickets added successfully!");
  //     setFormData({
  //       ...formData,
  //       ticketsToAdd: 0, // Reset ticketsToAdd
  //     });
  //   } catch (error) {
  //     alert("Failed to add tickets: " + error.message);
  //   }
  // };

  return (
    <div className="container mt-5">
      <h2>Sell Tickets</h2>
      <form onSubmit={handleSubmit}>
        {[
          { label: "Vendor Name", name: "vendorName", type: "text" },
          { label: "Event Name", name: "eventName", type: "text" },
          { label: "Tickets to add", name: "ticketsToRelease", type: "number" },
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
