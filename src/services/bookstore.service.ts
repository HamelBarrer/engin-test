import { Bookstore } from '../types/bookstore.type';

export const listBookstoreService = async () => {
  const response = await fetch(import.meta.env.VITE_ENDPOINT_BOOKSTORE);
  if (response.status === 204) {
    throw new Error('No content');
  }
  const dataJson = await response.json();

  return dataJson as Bookstore[];
};

export const createBookstoreService = async (data: Bookstore) => {
  const response = await fetch(import.meta.env.VITE_ENDPOINT_BOOKSTORE, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  const dataJson = await response.json();

  return dataJson as Bookstore;
};

export const updateBookstoreService = async (
  bookId: number,
  data: Bookstore,
) => {
  const response = await fetch(
    `${import.meta.env.VITE_ENDPOINT_BOOKSTORE}/${bookId}`,
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
