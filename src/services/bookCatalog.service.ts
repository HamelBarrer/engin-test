import { BookCatalog } from '../types/bookCatalog.type';

export const listBookCatalogService = async () => {
  const response = await fetch(import.meta.env.VITE_ENDPOINT_BOOKCATALOG);
  if (response.status === 204) {
    throw new Error('No content');
  }
  const dataJson = await response.json();

  return dataJson as BookCatalog[];
};

export const createBookCatalogService = async (data: BookCatalog) => {
  data.bookStoreId = Number(data.bookStoreId);

  const response = await fetch(import.meta.env.VITE_ENDPOINT_BOOKCATALOG, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  const dataJson = await response.json();
  if (!response.ok) {
    throw new Error(dataJson.error);
  }

  return dataJson as BookCatalog;
};

export const updateBookCatalogService = async (
  bookId: number,
  data: BookCatalog,
) => {
  data.bookStoreId = Number(data.bookStoreId);

  const response = await fetch(
    `${import.meta.env.VITE_ENDPOINT_BOOKCATALOG}/${bookId}`,
    {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    },
  );
  const dataJson = await response.json();
  if (!response.ok) {
    throw new Error(dataJson.error);
  }

  return dataJson;
};
