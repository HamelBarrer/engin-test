import { useState } from 'react';
import ModalOrganism from './components/ui/organisms/ModalOrganism';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="h-screen grid place-content-center">
      <button
        className="bg-indigo-500 p-2 rounded-lg text-white font-bold"
        onClick={() => setIsOpen(true)}
      >
        Add
      </button>
      {isOpen && <ModalOrganism setIsOpen={setIsOpen} />}
    </div>
  );
};

export default App;
