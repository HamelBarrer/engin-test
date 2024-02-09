import { LabelHTMLAttributes } from 'react';

interface Props extends LabelHTMLAttributes<HTMLLabelElement> {
  labelName: string;
}

const LabelAtom = ({ labelName, children, ...props }: Props) => {
  return (
    <label className="flex flex-col gap-2" {...props}>
      {labelName}
      {children}
    </label>
  );
};

export default LabelAtom;
