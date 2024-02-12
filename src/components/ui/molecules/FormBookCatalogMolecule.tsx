import React, { useState } from 'react';
import {
  createBookCatalogService,
  updateBookCatalogService,
} from '../../../services/bookCatalog.service';
import { BookCatalog } from '../../../types/bookCatalog.type';
import AlertErrorAtom from '../atoms/AlertErrorAtom';
import ButtonAtom from '../atoms/ButtonAtom';
import InputAtom from '../atoms/InputAtom';
import LabelAtom from '../atoms/LabelAtom';

interface Props {
  bookCatalog: BookCatalog | undefined;
}

export default function FormBookCatalogMolecule({ bookCatalog }: Props) {
  const [formData, setFormData] = useState({
    title: bookCatalog?.title ?? '',
    author: bookCatalog?.author ?? '',
    details: bookCatalog?.details ?? '',
    bookStoreId: bookCatalog?.bookStoreId ?? 0,
  });
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const { title, author, details, bookStoreId } = formData;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();

      if (bookCatalog?.id) {
        await updateBookCatalogService(bookCatalog.id, formData);
      } else {
        await createBookCatalogService(formData);
      }
    } catch (error) {
      const err = error as Error;
      setIsError(true);
      setErrorMessage(err.message);

      setTimeout(() => {
        setIsError(false);
        setErrorMessage('');
      }, 5000);
    }
  };

  return (
    <>
      {isError && <AlertErrorAtom message={errorMessage} />}
      <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
        <LabelAtom labelName="title">
          <InputAtom name="title" value={title} onChange={handleChange} />
        </LabelAtom>
        <LabelAtom labelName="author">
          <InputAtom name="author" value={author} onChange={handleChange} />
        </LabelAtom>
        <LabelAtom labelName="details">
          <InputAtom name="details" value={details} onChange={handleChange} />
        </LabelAtom>
        <LabelAtom labelName="bookStoreId">
          <InputAtom
            name="bookStoreId"
            value={bookStoreId}
            onChange={handleChange}
          />
        </LabelAtom>
        <ButtonAtom type="submit" buttonName="Save" />
      </form>
    </>
  );
}
