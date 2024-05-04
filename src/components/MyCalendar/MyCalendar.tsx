import React from 'react';
import { Calendar } from 'primereact/calendar';

const MyCalendar: React.FC = () => {
  return (
    <div className="my-calendar">
      <h1>One-Week Calendar</h1>
      <Calendar
        value={new Date()} // Set the initial date (today)
        inline // Display the calendar inline
        showWeek // Show week numbers
        numberOfMonths={1} // Display only one month
        selectionMode="single" // Allow selecting a single date
      />
    </div>
  );
};

export default MyCalendar;