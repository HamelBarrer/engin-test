import { BrowserRouter, Route, Routes } from 'react-router-dom';
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
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
