import React from "react";
import image from '../Image/image1.jpg';

const Home = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        textAlign: 'center',
      }}
    >
      <div>
        <h1>Welcome to the Booking.LK</h1>
        <p>
          Explore the features and manage your events and tickets! Good Day!
        </p>
      </div>
    </div>
  );
};

export default Home;