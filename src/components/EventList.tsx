'use client';

import React from 'react';
import { useEventStore } from './store';
import { Event } from '../app/types';
import { FaTrashAlt, FaCalendarDay } from 'react-icons/fa';

interface EventListProps {
  filteredEvents: Event[];
}

export const EventList = ({ filteredEvents }: EventListProps) => {
  const { deleteEvent } = useEventStore();

  if (filteredEvents.length === 0) {
    return (
      <div className="text-center py-6">
        <p className="text-gray-500">No events found. Try adding some!</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {filteredEvents.map((ev) => (
        <div
          key={ev.id}
          className="flex justify-between items-center p-4 bg-white rounded-xl shadow hover:shadow-lg transition-shadow duration-200"
        >
          <div className="flex items-start gap-4">
            <FaCalendarDay className="text-sky-500 text-xl mt-1" />
            <div>
              <h3 className="text-lg font-semibold text-gray-900">{ev.name}</h3>
              <p className="text-sm text-gray-500">
                {new Date(ev.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </p>
            </div>
          </div>
          <button
            onClick={() => deleteEvent(ev.id)}
            className="flex items-center gap-1 text-sm px-3 py-1.5 text-red-600 border border-red-100 rounded-md hover:bg-red-50 transition"
          >
            <FaTrashAlt className="text-sm" />
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};
