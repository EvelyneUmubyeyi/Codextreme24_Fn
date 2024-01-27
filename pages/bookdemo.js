import React, { useState } from 'react';

const Book = () => {
  const initialSlots = [
    { id: 1, date: new Date().toISOString().split('T')[0], hours: '09', minutes: '00', period: 'AM' },
    { id: 2, date: new Date().toISOString().split('T')[0], hours: '12', minutes: '30', period: 'PM' },
    { id: 3, date: new Date().toISOString().split('T')[0], hours: '03', minutes: '45', period: 'AM' },
  ];

  const [slots, setSlots] = useState(initialSlots);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const [showMessage, setShowMessage] = useState(true);
  const [selectedSlots, setSelectedSlots] = useState([]);

  const handleDateChange = (id, newDate) => {
    setSlots((prevSlots) =>
      prevSlots.map((slot) => (slot.id === id ? { ...slot, date: newDate } : slot))
    );
  };

  const handleTimeChange = (id, field, value) => {
    setSlots((prevSlots) =>
      prevSlots.map((slot) => (slot.id === id ? { ...slot, [field]: value } : slot))
    );
  };

  const handlePeriodChange = (id, value) => {
    setSlots((prevSlots) =>
      prevSlots.map((slot) => (slot.id === id ? { ...slot, period: value } : slot))
    );
  };

  const handleBooking = async () => {
    // Check if the user has entered three time slots
    if (slots.filter((slot) => slot.date && slot.hours && slot.minutes && slot.period).length !== 3) {
      setShowMessage(true);
      return;
    }

    // Simulate sending data to the backend (API endpoint)
    // For now, just log the data to the console
    console.log('Booking Details:', { slots });

    // Update the list of selected slots
    setSelectedSlots([...selectedSlots, ...slots]);

    // Reset the time slots and date
    setSlots(initialSlots);

    // Simulate a confirmation message
    setBookingConfirmed(true);
    localStorage.setItem('status', 'Demo booked');
  };

  const formStyle = {
    // maxWidth: '800px', // Increased width to 600px
    margin: 'auto',
    border: '1px solid #ccc',
    borderRadius: '5px',
    // padding: '20px',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    display: 'flex', // Set form to flex to align side by side
    flexDirection: 'row', // Arrange children in a row
  };

  const messageStyle = {
    color: 'red',
    // marginTop: '10px',
    textAlign: 'center',
  };

  const listStyle = {
    border: '1px solid #ccc',
    borderRadius: '5px',
    // padding: '10px',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    marginLeft: '20px', // Margin to the left of the list
    // width: '300px', 
    outerHeight:'50px',

  };

  const selectedSlotStyle = {
    // backgroundColor: '#001f3f',
    color: 'white',
    padding: '8px',
    marginBottom: '5px',
    borderRadius: '5px',
  };

  const bodyStyle = {
    // backgroundImage: 'url("https://media.istockphoto.com/id/970504432/vector/isometric-message-online-chat-social-text-concept-businessman-holding-smartphone-with-emails.jpg?s=612x612&w=0&k=20&c=80vhBj8TLuDuiP50qjuj-2LKbt9t5qchx_Z4v8i8TfE=")', // Replace with the path to your image
    backgroundSize: 'cover',
    minHeight: '100vh', // Ensure the background covers the entire viewport
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  return (
    <div style={bodyStyle} className='py-12 border-2'>
      <div style={formStyle} className='w-[70%] flex justify-between px-8 py-4'>
        <div style={{ marginRight: '20px' }} className='w-[50%]'>
          <h2 style={{ textAlign: 'center', color: '#001f3f', fontSize: '24px' }} className='font-bold mt-6 mb-2'>Book a Live Demo</h2>
          {showMessage && (
            <p style={messageStyle} className='text-sm font-medium mb-8'>You must enter three time slots for the live demo.</p>
          )}
          {slots.map((slot) => (
            <div key={slot.id} style={{ marginBottom: '30px' }}>
              <label htmlFor={`date${slot.id}`} style={{ display: 'block', marginBottom: '5px', color: '#001f3f' }} className='text-sm'>
                Select Date (Slot {slot.id}):
              </label>
              <input
                type="date"
                id={`date${slot.id}`}
                value={slot.date}
                onChange={(e) => handleDateChange(slot.id, e.target.value)}
                style={{ width: '100%', padding: '5px', border: '1px solid #ccc', borderRadius: '5px' }}
                className='text-sm'
              />
              <div style={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
                <label htmlFor={`hours${slot.id}`} style={{ marginRight: '10px', color: '#001f3f' }} className='text-sm'>
                  Hours:
                </label>
                <input
                  type="number"
                  id={`hours${slot.id}`}
                  min="0"
                  max="12"
                  value={slot.hours}
                  onChange={(e) => handleTimeChange(slot.id, 'hours', e.target.value)}
                  style={{ width: '60px', padding: '5px', border: '1px solid #ccc', borderRadius: '5px' }}
                  className='text-sm'
                />
                <label htmlFor={`minutes${slot.id}`} style={{ marginLeft: '10px', marginRight: '10px', color: '#001f3f'}} className='text-sm'>
                  Minutes:
                </label>
                <input
                  type="number"
                  id={`minutes${slot.id}`}
                  min="0"
                  max="59"
                  value={slot.minutes}
                  onChange={(e) => handleTimeChange(slot.id, 'minutes', e.target.value)}
                  style={{ width: '60px', padding: '5px', border: '1px solid #ccc', borderRadius: '5px' }}
                  className='text-sm'
                />
              </div>
              <div style={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
                <label htmlFor={`period${slot.id}`} style={{ marginRight: '10px', color: '#001f3f'}} className='text-sm'>
                  Period:
                </label>
                <select
                  id={`period${slot.id}`}
                  value={slot.period}
                  onChange={(e) => handlePeriodChange(slot.id, e.target.value)}
                  style={{ padding: '5px', border: '1px solid #ccc', borderRadius: '5px' }}
                  className='text-sm'
                >
                  <option value="AM">AM</option>
                  <option value="PM">PM</option>
                </select>
              </div>
            </div>
          ))}
          <button
            onClick={handleBooking}
            // style={{
            //   display: 'block',
            //   width: '100%',
            //   padding: '10px',
            //   backgroundColor: '#001f3f',
            //   color: '#fff',
            //   border: 'none',
            //   borderRadius: '5px',
            //   cursor: 'pointer',
            //   marginTop: '10px',
            // }}
            class="w-full mt-2 py-2 px-3 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
          >
            Book Demo
          </button>

          {bookingConfirmed && (
            <p style={{ textAlign: 'center' }} className='text-sm mt-4 font-semibold text-green-500'>Booking confirmed! An email confirmation will be sent.</p>
          )}
        </div>
        <div style={listStyle} className='w-[50%] px-8'>
          <h2 style={{ textAlign: 'center', color: '#001f3f', fontSize: '24px' }} className='font-bold mt-6 mb-6'>Selected Slots</h2>
          {selectedSlots.map((selectedSlot, index) => (
            <div key={index} style={selectedSlotStyle} className='bg-blue-500'>
              <p className='text-sm font-semibold'>{selectedSlot.date}</p>
              <p className='text-sm font-semibold'>{`${selectedSlot.hours}:${selectedSlot.minutes} ${selectedSlot.period}`}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Book;
