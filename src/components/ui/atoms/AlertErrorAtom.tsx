interface Props {
  message: string;
}

const AlertErrorAtom = ({ message }: Props) => {
  return (
    <div className="fixed top-4 right-4 bg-red-500 text-white font-bold p-3 rounded-lg shadow-lg">
      {message}
    </div>
  );
};

export default AlertErrorAtom;
