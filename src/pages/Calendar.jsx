import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { useTaskContext } from './TaskContext';

const localizer = momentLocalizer(moment);

function CalendarView() {
  const { tasks } = useTaskContext();

  const events = tasks.map(task => ({
    title: task.text,
    start: new Date(task.deadline),
    end: new Date(task.deadline),
    allDay: true,
  }));

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">Calendar</h2>
      <div style={{ height: '500px' }}>
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          style={{ height: '100%' }}
        />
      </div>
    </div>
  );
}

export default CalendarView;