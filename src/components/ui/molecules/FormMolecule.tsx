import InputAtom from '../atoms/InputAtom';
import LabelAtom from '../atoms/LabelAtom';

const FormMolecule = () => {
  return (
    <form className="flex flex-col gap-2">
      <LabelAtom labelName="title">
        <InputAtom />
      </LabelAtom>
      <LabelAtom labelName="author">
        <InputAtom />
      </LabelAtom>
      <LabelAtom labelName="price">
        <InputAtom />
      </LabelAtom>
      <LabelAtom labelName="amount">
        <InputAtom />
      </LabelAtom>
    </form>
  );
};

export default FormMolecule;
