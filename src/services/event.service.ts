import { EventLog, Spots } from '../types/event.type';

export const listSpotService = async () => {
  const response = await fetch(`${import.meta.env.VITE_ENDPOINT_EVENT}/spots`);
  if (response.status === 204) {
    throw new Error('No content');
  }
  const dataJson = await response.json();

  return dataJson as Spots[];
};

export const listEventService = async () => {
  const response = await fetch(import.meta.env.VITE_ENDPOINT_EVENT);
  if (response.status === 204) {
    throw new Error('No content');
  }
  const dataJson = await response.json();

  return dataJson as EventLog[];
};

export const createEventService = async (data: EventLog) => {
  const response = await fetch(import.meta.env.VITE_ENDPOINT_EVENT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  const dataJson = await response.json();

  return dataJson as EventLog;
};

export const updateEventService = async (eventId: number, data: EventLog) => {
  const response = await fetch(
    `${import.meta.env.VITE_ENDPOINT_EVENT}/${eventId}`,
    {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    },
  );
  const dataJson = await response.json();

  return dataJson;
};
