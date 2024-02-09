import { InputHTMLAttributes } from 'react';

interface Props extends InputHTMLAttributes<HTMLInputElement> {}

const InputAtom = ({ ...props }: Props) => {
  return <input type="text" className="shadow p-2 rounded-md" {...props} />;
};

export default InputAtom;
