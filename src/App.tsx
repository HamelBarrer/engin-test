import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BookCatelogView from './views/BookCatelogView';
import BookstoreView from './views/BookstoreView';
import EventView from './views/EventView';
import LayoutView from './views/LayoutView';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutView />}>
          <Route index element={<EventView />} />
          <Route path="bookstore" element={<BookstoreView />} />
          <Route path="book-catalog" element={<BookCatelogView />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
