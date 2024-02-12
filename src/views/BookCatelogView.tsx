import { useEffect, useState } from 'react';
import AlertErrorAtom from '../components/ui/atoms/AlertErrorAtom';
import ButtonAtom from '../components/ui/atoms/ButtonAtom';
import FormBookCatalogMolecule from '../components/ui/molecules/FormBookCatalogMolecule';
import ModalOrganism from '../components/ui/organisms/ModalOrganism';
import { listBookCatalogService } from '../services/bookCatalog.service';
import { BookCatalog } from '../types/bookCatalog.type';

const BookCatelogView = () => {
  const [bookCatalogs, setBookCatalogs] = useState<BookCatalog[]>([]);
  const [bookCatalog, setBookCatalog] = useState<BookCatalog>();
  const [isOpen, setIsOpen] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleClick = (data: BookCatalog) => {
    setIsOpen(true);
    setBookCatalog(data);
  };

  useEffect(() => {
    listBookCatalogService()
      .then((res) => setBookCatalogs(res))
      .catch((error) => {
        setBookCatalogs([]);

        const err = error as Error;
        setIsError(true);
        setErrorMessage(err.message);

        setTimeout(() => {
          setIsError(false);
          setErrorMessage('');
        }, 5000);
      });
  }, []);

  return (
    <article>
      {isError && <AlertErrorAtom message={errorMessage} />}
      <ButtonAtom buttonName="Add" onClick={() => setIsOpen(true)} />
      <div className="grid grid__fluid__3">
        {bookCatalogs.length === 0 ? (
          <p>No content</p>
        ) : (
          <>
            {bookCatalogs.map((book) => (
              <article
                className="bg-white shadow-lg rounded-md p-2 w-80 duration-300 hover:scale-105 hover:cursor-pointer"
                key={book.id}
                onClick={() => handleClick(book)}
              >
                <div className="flex items-center justify-between">
                  <p className="font-bold">{book.title}</p>
                  <p className="font-semibold">{book.author}</p>
                </div>
                <p className="font-light">${book.details}</p>
              </article>
            ))}
          </>
        )}
      </div>
      {isOpen && (
        <ModalOrganism setIsOpen={setIsOpen} setData={setBookCatalog}>
          <FormBookCatalogMolecule bookCatalog={bookCatalog} />
        </ModalOrganism>
      )}
    </article>
  );
};

export default BookCatelogView;
