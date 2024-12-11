import React from "react";
import '../stylings/navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';



const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-custom">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Booking.LK
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/Configuration">
                  Configure
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/Vendor">
                  Vendor
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/Customer">
                  Customer
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/TicketStatus">
                  Ticket Status
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  );
};

export default Navbar;
