import { useEffect, useState } from 'react';
import ModalOrganism from '../components/ui/organisms/ModalOrganism';
import { listBookstoreService } from '../services/bookstore.service';
import { Bookstore } from '../types/bookstore.type';

const BookstoreView = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [bookstore, setBookstore] = useState<Bookstore[]>([]);
  const [book, setBook] = useState<Bookstore>();

  const handleClick = (data: Bookstore) => {
    setIsOpen(true);
    setBook(data);
  };

  useEffect(() => {
    listBookstoreService()
      .then((res) => setBookstore(res))
      .catch(() => setBookstore([]));
  }, []);

  return (
    <div className="h-screen grid place-content-center">
      <button
        className="bg-indigo-500 p-2 rounded-lg text-white font-bold"
        onClick={() => setIsOpen(true)}
      >
        Add
      </button>
      <div className="grid grid__fluid__3">
        {bookstore.length === 0 ? (
          <p>No content</p>
        ) : (
          <>
            {bookstore.map((book) => (
              <article
                className="bg-white shadow-lg rounded-md p-2 w-80 duration-300 hover:scale-105 hover:cursor-pointer"
                key={book.id}
                onClick={() => handleClick(book)}
              >
                <div className="flex items-center justify-between">
                  <p className="font-bold">{book.title}</p>
                  <p className="font-semibold">{book.author}</p>
                </div>
                <p className="font-light">price: ${book.price}</p>
                <p className="font-light">stock: {book.stock}</p>
              </article>
            ))}
          </>
        )}
      </div>
      {isOpen && (
        <ModalOrganism book={book} setIsOpen={setIsOpen} setBook={setBook} />
      )}
    </div>
  );
};

export default BookstoreView;
