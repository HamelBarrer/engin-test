import { useState } from 'react';
import {
  createBookstoreService,
  updateBookstoreService,
} from '../../../services/bookstore.service';
import { Bookstore } from '../../../types/bookstore.type';
import ButtonAtom from '../atoms/ButtonAtom';
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

    if (book?.id) {
      await updateBookstoreService(book.id, formData);
    } else {
      await createBookstoreService(formData);
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
      <ButtonAtom type="submit" buttonName="Save" />
    </form>
  );
};

export default FormMolecule;
