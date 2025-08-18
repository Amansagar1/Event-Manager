'use client';

import React, { useState, useEffect } from 'react';
import { useEventStore } from '../../components/store';
import { EventForm } from '../../components/EventForm';
import { SearchBar } from '../../components/SearchBar';
import { EventList } from '../../components/EventList';

export default function EventsPage() {
  const { events, setEvents } = useEventStore();
  const [search, setSearch] = useState('');

  useEffect(() => {
    const stored = localStorage.getItem('events');
    if (stored) setEvents(JSON.parse(stored));
  }, [setEvents]);

  const filteredEvents = events.filter((ev) =>
    ev.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-10 px-4">
      <div className="max-w-3xl mx-auto space-y-10">
        <header className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">Mini Event Manager</h1>
        </header>

        <EventForm />

        <section className="space-y-6">
          <SearchBar search={search} setSearch={setSearch} />
          <EventList filteredEvents={filteredEvents} />
        </section>
      </div>
    </main>
  );
}
