import React, { useState } from 'react';
import { LineLabel, LineInput, QuoteImg } from './QuoteStyled';
import cleanerImg from "./Images/Black Cleaning Service Logo (2).png"

const Quote = () => {
  const [zipCode, setZipCode] = useState('');
  const [bedrooms, setBedrooms] = useState('');
  const [bathrooms, setBathrooms] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form data before submission
    if (!zipCode || !bedrooms || !bathrooms || !date || !time || !email) {
      alert('Please fill in all fields');
      return;
    }

    // Perform form submission or any other required action here
    // You can access the form data using the state variables

    // Reset the form
    setZipCode('');
    setBedrooms('');
    setBathrooms('');
    setDate('');
    setTime('');
    setEmail('');
  };

  const handleBedroomsChange = (e) => {
    const value = parseInt(e.target.value);
    setBedrooms(value >= 0 ? value : 0);
  };

  const handleBathroomsChange = (e) => {
    const value = parseInt(e.target.value);
    setBathrooms(value >= 0 ? value : 0);
  };

  return (
    <>
    <QuoteImg src={cleanerImg}/>
    <div
      style={{
        width: '70%',
        height: 'auto',
        margin: 'auto',
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '10px',
        zIndex: '2',
      }}
    >
      <h2 style={{ color: '#39d7ff', textAlign: 'center', fontFamily: 'Roboto, sansSerif'}}>Elevate your cleaning game</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <LineLabel>Zip Code:</LineLabel>
          <LineInput
            type="text"
            value={zipCode}
            onChange={(e) => setZipCode(e.target.value)}
            required
          />
        </div>
        <div>
          <LineLabel>Tell us about your place</LineLabel>
          <div>
            <LineLabel>Bedrooms:</LineLabel>
            <LineInput
              type="number"
              value={bedrooms}
              onChange={handleBedroomsChange}
              required
            />
          </div>
          <div>
            <LineLabel>Bathrooms:</LineLabel>
            <LineInput
              type="number"
              value={bathrooms}
              onChange={handleBathroomsChange}
              required
            />
          </div>
        </div>
        <div>
          <LineLabel>Date:</LineLabel>
          <LineInput
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>
        <div>
          <LineLabel>Time:</LineLabel>
          <LineInput
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
          />
        </div>
        <div>
          <LineLabel>Email:</LineLabel>
          <LineInput
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          style={{
            backgroundColor: '#39d7ff',
            borderRadius: '5px',
            padding: '10px',
            color: 'white',
            border: 'none',
            marginTop: '10px',
            width: '100%',
            fontSize: "15px",
          }}
        >
          Get Price
        </button>
      </form>
    </div>
    </>
  );
};

export default Quote;
