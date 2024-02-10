import { ButtonHTMLAttributes } from 'react';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  buttonName: string;
}

const ButtonAtom = ({ buttonName, className, ...props }: Props) => {
  return (
    <button
      className={`bg-indigo-500 p-2 rounded-lg text-white font-bold ${className}`}
      {...props}
    >
      {buttonName}
    </button>
  );
};

export default ButtonAtom;
