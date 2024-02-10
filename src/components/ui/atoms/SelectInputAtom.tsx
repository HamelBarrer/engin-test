import { Spots } from '../../../types/event.type';

interface Props {
  spots: Spots[];
  formData: {
    name: string;
    description: string;
    date: string;
    spotId: number;
    quantity: number;
  };
  setFormData: React.Dispatch<
    React.SetStateAction<{
      name: string;
      description: string;
      date: string;
      spotId: number;
      quantity: number;
    }>
  >;
}

const SelectInputAtom = ({ spots, formData, setFormData }: Props) => {
  return (
    <select
      className="shadow p-2 rounded-md"
      name="spotId"
      value={formData.spotId}
      onChange={(e) =>
        setFormData({
          ...formData,
          spotId: Number(e.target.value),
        })
      }
    >
      {spots.map((spot) => (
        <option key={spot.id} value={spot.id}>
          {spot.name}
        </option>
      ))}
    </select>
  );
};

export default SelectInputAtom;
