import { ReactNode } from 'react';
import { INIT_STATE_BOOKSTORE } from '../../../constants/state.constant';
import CloseIcon from '../../icons/CloseIcon';

interface Props<T> {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setData: React.Dispatch<React.SetStateAction<T>>;
  children: ReactNode;
}

export default function ModalOrganism<T>({
  setIsOpen,
  setData,
  children,
}: Props<T>) {
  const handleClick = () => {
    setIsOpen(false);
    setData(INIT_STATE_BOOKSTORE as T);
  };

  return (
    <div
      className="relative z-10"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div className="transform rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
            <div className="relative bg-gray-50 p-4">
              {children}
              <button
                className="absolute top-[-1rem] right-[-1rem] w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-white"
                onClick={handleClick}
              >
                <CloseIcon />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
