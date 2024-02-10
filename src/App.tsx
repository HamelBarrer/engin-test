import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BookstoreView from './views/BookstoreView';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BookstoreView />} />
        <Route path="/bookstore" element={<BookstoreView />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
