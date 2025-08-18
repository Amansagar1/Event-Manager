'use client';

import React, { useState } from 'react';
import { useEventStore } from './store';
import { FaCalendarPlus } from 'react-icons/fa';

export const EventForm = () => {
  const { addEvent } = useEventStore();
  const [name, setName] = useState('');
  const [date, setDate] = useState('');

  function handleAdd(e: React.FormEvent) {
    e.preventDefault();
    if (name && date) {
      addEvent({ id: crypto.randomUUID(), name, date });
      setName('');
      setDate('');
    }
  }

  return (
    <form
      onSubmit={handleAdd}
      className="bg-white p-6 rounded-xl shadow-md space-y-6"
    >
      <div className="flex items-center gap-3">
        <FaCalendarPlus className="text-sky-600 text-xl" />
        <h2 className="text-xl font-semibold text-gray-800">Add New Event</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Event Name
          </label>
          <input
            type="text"
            placeholder="Enter event name"
            value={name}
            required
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-500"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Event Date
          </label>
          <input
            type="date"
            value={date}
            required
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-500"
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
      </div>

      <button
        type="submit"
        className="w-full md:w-auto px-6 py-2 bg-sky-800 text-white rounded-md hover:bg-sky-700 transition duration-200 focus:outline-none focus:ring-2 focus:ring-sky-500"
      >
        Add Event
      </button>
    </form>
  );
};
