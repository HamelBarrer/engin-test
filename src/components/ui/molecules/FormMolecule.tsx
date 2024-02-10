import { useState } from 'react';
import {
  createBookstoreService,
  updateBookstoreService,
} from '../../../services/bookstore.service';
import { Bookstore } from '../../../types/bookstore.type';
import InputAtom from '../atoms/InputAtom';
import LabelAtom from '../atoms/LabelAtom';

interface Props {
  book: Bookstore | undefined;
}

const FormMolecule = ({ book }: Props) => {
  const [formData, setFormData] = useState({
    title: book?.title ?? '',
    author: book?.author ?? '',
    price: book?.price ?? 0,
    stock: book?.stock ?? 0,
  });
  const { title, author, price, stock } = formData;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (title === '') {
      await createBookstoreService(formData);
    } else {
      await updateBookstoreService(book!.id!, formData);
    }
  };

  return (
    <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
      <LabelAtom labelName="title">
        <InputAtom name="title" value={title} onChange={handleChange} />
      </LabelAtom>
      <LabelAtom labelName="author">
        <InputAtom name="author" value={author} onChange={handleChange} />
      </LabelAtom>
      <LabelAtom labelName="price">
        <InputAtom name="price" value={price} onChange={handleChange} />
      </LabelAtom>
      <LabelAtom labelName="stock">
        <InputAtom name="stock" value={stock} onChange={handleChange} />
      </LabelAtom>
      <button
        type="submit"
        className="inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500"
      >
        Deactivate
      </button>
    </form>
  );
};

export default FormMolecule;
