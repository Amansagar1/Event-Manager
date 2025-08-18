export type Event = {
  id: string;
  name: string;
  date: string;
};

export type EventStore = {
  events: Event[];
  addEvent: (event: Event) => void;
  deleteEvent: (id: string) => void;
  setEvents: (events: Event[]) => void;
};