'use client';

import { create } from 'zustand';
import { EventStore } from '../app/types';

export const useEventStore = create<EventStore>((set) => ({
  events: [],
  addEvent: (event) =>
    set((state) => {
      const updated = [...state.events, event];
      localStorage.setItem('events', JSON.stringify(updated));
      return { events: updated };
    }),
  deleteEvent: (id) =>
    set((state) => {
      const updated = state.events.filter((ev) => ev.id !== id);
      localStorage.setItem('events', JSON.stringify(updated));
      return { events: updated };
    }),
  setEvents: (events) => set(() => ({ events })),
}));